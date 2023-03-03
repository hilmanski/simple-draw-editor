import { useAtom } from 'jotai'
import {
    bgWidthAtom,
    bgHeightAtom,
    bgColorAtom,
    currentToolAtom,
    drawElementsAtom,
    currentElementAtom,
    currentShapeAtom,
    drawElementIdsAtom,
} from '../../state/jotaiState'
import {
    addNewShapeElement,
    addNewTextElement,
} from '../../utils/ElementGenerator'
import TextElement from '../Elements/TextElement'
import ShapeElement from '../Elements/ShapeElement'
import { useEffect } from 'react'
import { ShapeType } from '../../types'

export default function MainEditor() {
    const [width] = useAtom(bgWidthAtom)
    const [height] = useAtom(bgHeightAtom)
    const [bgColor] = useAtom(bgColorAtom)
    const [currentTool, setCurrentTool] = useAtom(currentToolAtom)
    const [currentShape, setCurrentShape] = useAtom(currentShapeAtom)
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [drawElementIds, setDrawElementIds] = useAtom(drawElementIdsAtom)
    const [currentElement, setCurrentElement] = useAtom(currentElementAtom)

    const handleClick = (e: React.MouseEvent) => {
        // Prevent if drawElement is dragged/clicked
        //      and select as currentElement
        if (e.target instanceof HTMLElement) {
            if (e.target.classList.contains('drawElement')) {
                // Set currentElement
                const id = e.target.getAttribute('data-id')
                const element = drawElements.find(
                    (element) => element.id === id
                )

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

        if (currentTool === 'background') return

        // Get x and y coordinate relative to the frame
        const x = e.clientX - e.currentTarget.getBoundingClientRect().left
        const y = e.clientY - e.currentTarget.getBoundingClientRect().top

        // Perform Action
        let newElement = null
        switch (currentTool) {
            case 'text':
                newElement = addText(x, y)
                break
            case 'shape':
                newElement = addShape(x, y)
                break
            default:
                break
        }

        if (newElement == null) return

        setDrawElements([...drawElements, newElement])
        setDrawElementIds([...drawElementIds, newElement.id])
    }

    function _getZIndex(): number {
        return (drawElements.length + 1) as number
    }

    function addText(x: number, y: number) {
        return addNewTextElement(x, y, _getZIndex())
    }

    function addShape(x: number, y: number) {
        return addNewShapeElement(x, y, _getZIndex(), currentShape)
    }

    useEffect(() => {
        console.log('currentElement', currentElement)
        setCurrentTool(currentElement ? currentElement.type : 'background')

        if (currentElement?.type === 'shape')
            setCurrentShape(currentElement.subType as ShapeType)
    }, [currentElement])

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
