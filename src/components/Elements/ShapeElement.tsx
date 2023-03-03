import { useAtom } from 'jotai'
import Draggable from 'react-draggable'

import { currentElementAtom, drawElementsAtom } from '../../state/jotaiState'
import { DrawElementType } from '../../types'

export default function ShapeElement(element: DrawElementType) {
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [currentElement, _] = useAtom(currentElementAtom)

    return (
        <Draggable
            key={element.id}
            defaultPosition={{ x: element.x, y: element.y }}
            bounds="parent">
            {renderShape(element, currentElement?.id)}
        </Draggable>
    )
}

function renderShape(
    element: DrawElementType,
    currentElement_id: number | undefined
) {
    switch (element.detail.shape) {
        case 'circle':
            return <></>
        case 'rectangle':
            return (
                <div
                    data-id={element.id}
                    data-type={element.type}
                    className={`drawElement absolute cursor-move 
                        ${
                            currentElement_id === element.id
                                ? 'border-2 border-blue-500'
                                : ''
                        }
                        ${element?.visible === false ? 'hidden' : ''}
                    `}
                    style={{
                        zIndex: element.zIndex,
                        width: element.detail.width,
                        height: element.detail.height,
                        backgroundColor: element.detail.color,
                        borderRadius: element.detail.borderRadius,
                        border: `${element.detail.borderWidth}px solid ${element.detail.borderColor}`,
                    }}></div>
            )
        default:
            return <></>
    }
}
