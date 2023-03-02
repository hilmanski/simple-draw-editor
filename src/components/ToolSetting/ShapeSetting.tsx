import { useAtom } from 'jotai'
import { currentElementAtom, currentShapeAtom } from '../../state/jotaiState'
import SVGIcon from '../SVGIcon'

export default function ShapeSetting() {
    const [currentElement, setCurrentElement] = useAtom(currentElementAtom)
    const [currentShape, setCurrentShape] = useAtom(currentShapeAtom)

    return (
        <section>
            <p className="font-semibold mb-5">Choose Shape</p>

            <div className="flex items-center space-x-2">
                <SVGIcon>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                </SVGIcon>
            </div>
        </section>
    )
}
