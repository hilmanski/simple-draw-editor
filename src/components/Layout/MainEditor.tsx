import { useAtom, useAtomValue } from 'jotai'
import {
    bgWidthAtom,
    bgHeightAtom,
    bgColorAtom,
    currentToolAtom,
    drawElementsAtom,
    currentElementAtom,
    currentShapeAtom,
} from '../../state/jotaiState'
import {
    addNewShapeElement,
    addNewTextElement,
} from '../../utils/ElementGenerator'
import TextElement from '../Elements/TextElement'
import ShapeElement from '../Elements/ShapeElement'

export default function MainEditor() {
    const [width] = useAtom(bgWidthAtom)
    const [height] = useAtom(bgHeightAtom)
    const [bgColor] = useAtom(bgColorAtom)
    const currentTool = useAtomValue(currentToolAtom)
    const currentShape = useAtomValue(currentShapeAtom)
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [currentElement, setCurrentElement] = useAtom(currentElementAtom)

    const handleClick = (e: React.MouseEvent) => {
        if (currentTool === 'background') return

        // Prevent if drawElement is dragged/clicked
        //      and select as currentElement
        if (e.target instanceof HTMLElement) {
            if (e.target.classList.contains('drawElement')) {
                // Set currentElement
                const id = parseInt(e.target.getAttribute('data-id') as string)
                const element = drawElements.find(
                    (element) => element.id === id
                )

                console.log('selected el: ', element)
                if (element) setCurrentElement(element)

                return
            }

            // If background is clicked, when previous element is selected
            if (currentElement != null) {
                setCurrentElement(null)
                return
            }

            // If background is clicked, deselect currentElement
            setCurrentElement(null)
        }

        // Get x and y coordinate relative to the frame
        const x = e.clientX - e.currentTarget.getBoundingClientRect().left
        const y = e.clientY - e.currentTarget.getBoundingClientRect().top

        // Perform Action
        switch (currentTool) {
            case 'text':
                addText(x, y)
                break
            case 'shape':
                addShape(x, y)
                break
            default:
                break
        }
    }

    function addText(x: number, y: number) {
        const newElement = addNewTextElement(x, y)
        setDrawElements([...drawElements, newElement])
    }

    function addShape(x: number, y: number) {
        const newElement = addNewShapeElement(x, y, currentShape)
        setDrawElements([...drawElements, newElement])
    }

    return (
        <main
            className="px-5 min-h-screen
                flex items-center justify-center ">
            {/* Frame/Canvas */}
            <div
                className="relative border"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: `${bgColor}`,
                }}
                onClick={(e) => handleClick(e)}>
                {/* Drawn Elements inside canvas */}
                {drawElements.map((element) => {
                    if (element.type === 'text')
                        return <TextElement key={element.id} {...element} />

                    if (element.type === 'shape')
                        return <ShapeElement key={element.id} {...element} />
                })}
            </div>
        </main>
    )
}
