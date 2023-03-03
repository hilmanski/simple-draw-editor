import { useAtom } from 'jotai'
import { drawElementsAtom } from '../state/jotaiState'
import { DrawElementType } from '../types'
import SVGIcon from './SVGIcon'

export default function SortableElementList({
    element,
}: {
    element: DrawElementType
}) {
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)

    const deleteElement = (id: number) => {
        const newDrawElements = drawElements.filter(
            (element) => element.id !== id
        )
        setDrawElements(newDrawElements)
    }

    const toggleVisibility = (id: number) => {
        const newDrawElements = drawElements.map((element) => {
            if (element.id === id) {
                console.log('toggle ', element)
                return {
                    ...element,
                    visible: !element.visible,
                }
            }
            return element
        })

        setDrawElements(newDrawElements)
    }

    const getDetails = (element: any) => {
        switch (element.type) {
            case 'text':
                return element.detail.text?.substring(0, 10)
            case 'shape':
                return element.detail.shape
            default:
                return ''
        }
    }

    return (
        <div key={element.id} className="flex justify-between items-center">
            <p
                className={`
            ${element.visible ? '' : 'text-gray-700'}
            `}>
                {element.type} - {getDetails(element)}
            </p>

            <div className="flex space-x-2">
                <SVGIcon
                    width={15}
                    height={15}
                    onClick={() => toggleVisibility(element.id)}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                </SVGIcon>

                <SVGIcon
                    width={15}
                    height={15}
                    onClick={() => deleteElement(element.id)}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </SVGIcon>
            </div>
        </div>
    )
}
