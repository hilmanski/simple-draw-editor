import { useAtom } from 'jotai'
import Draggable from 'react-draggable'

import { currentElementAtom, drawElementsAtom } from '../../state/jotaiState'
import { DrawElementType } from '../../types'

export default function TextElement(element: DrawElementType) {
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [currentElement, _] = useAtom(currentElementAtom)

    function updateToEditMode(id: number) {
        if (!currentElement) return

        const newElement = {
            ...currentElement,
            onEditMode: true,
        }
        const newDrawElements = drawElements.map((element) => {
            if (element.id === currentElement.id) return newElement
            return element
        })

        setDrawElements(newDrawElements)
    }

    function updateText(text: string, isTyping?: boolean) {
        if (!currentElement) return

        const newElement = {
            ...currentElement,
            onEditMode: isTyping,
            detail: {
                ...currentElement.detail,
                text,
            },
        }
        const newDrawElements = drawElements.map((element) => {
            if (element.id === currentElement.id) return newElement
            return element
        })

        setDrawElements(newDrawElements)
    }

    return (
        <Draggable
            key={element.id}
            defaultPosition={{ x: element.x, y: element.y }}
            bounds="parent">
            {element.onEditMode ? (
                <input
                    value={element.detail.text}
                    onChange={(e) => {
                        updateText(e.target.value, true)
                    }}
                    onBlur={(e) => {
                        updateText(e.target.value, false)
                    }}
                    style={{
                        fontSize: `${element.detail.fontSize}px`,
                        fontFamily: `${element.detail.fontFamily}`,
                        color: `${element.detail.color}`,
                    }}
                    className="outline-0 absolute"
                    autoFocus
                    onFocus={(e) => {
                        e.target.select()
                    }}
                />
            ) : (
                <p
                    onDoubleClick={() => {
                        updateToEditMode(element.id)
                    }}
                    data-id={element.id}
                    data-type={element.type}
                    className={`drawElement absolute cursor-move 
                            ${
                                currentElement?.id === element.id
                                    ? 'border-2 border-blue-500'
                                    : ''
                            }
                            ${element?.visible === false ? 'hidden' : ''}
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
}
