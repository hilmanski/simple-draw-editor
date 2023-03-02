import { useAtom, useAtomValue } from 'jotai'
import { useState } from 'react'
import Draggable from 'react-draggable'
import {
    bgWidthAtom,
    bgHeightAtom,
    bgColorAtom,
    currentToolAtom,
    drawElementsAtom,
    currentElementAtom,
} from '../../state/jotaiState'
import { DrawElementType } from '../../types'

// import { addText } from '../../utils/tools'

export default function MainEditor() {
    const [width] = useAtom(bgWidthAtom)
    const [height] = useAtom(bgHeightAtom)
    const [bgColor] = useAtom(bgColorAtom)
    const currentTool = useAtomValue(currentToolAtom)

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
                addText(e, x, y)
                break
            default:
                break
        }
    }

    function addText(e: React.MouseEvent, x: number, y: number) {
        const uniqueId = Date.now()

        const newElement: DrawElementType = {
            type: 'text',
            id: uniqueId,
            x: x,
            y: y,
            detail: {
                text: 'Text',
                fontSize: 24,
                fontFamily: 'sans-serif',
                color: '#000000',
            },
        }

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
                    return (
                        <Draggable
                            key={element.id}
                            defaultPosition={{ x: element.x, y: element.y }}
                            bounds="parent">
                            {element.type === 'text' && (
                                <p
                                    data-id={element.id}
                                    data-type={element.type}
                                    className={`
                                            drawElement absolute cursor-move
                                            ${
                                                currentElement?.id ===
                                                element.id
                                                    ? 'border-2 border-blue-500'
                                                    : ''
                                            }
                                        `}
                                    style={{
                                        fontSize: `${element.detail.fontSize}px`,
                                        fontFamily: `${element.detail.fontFamily}`,
                                        color: `${element.detail.color}`,
                                    }}>
                                    {element.detail.text}
                                </p>
                            )}
                        </Draggable>
                    )
                })}
            </div>
        </main>
    )
}
