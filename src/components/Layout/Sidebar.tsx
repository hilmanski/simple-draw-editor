import { useAtom, useAtomValue } from 'jotai'
import { drawElementsAtom } from '../../state/jotaiState'
import SVGIcon from '../SVGIcon'

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import SortableElementList from '../SortableElementList'
import { DrawElementType } from '../../types'
import Footer from './Footer'
import Header from './Header'

export default function Sidebar() {
    const drawElements = useAtomValue(drawElementsAtom)

    return (
        <aside className="">
            <Header />

            <section>
                <p className="mb-2">Elements</p>

                <div>
                    {drawElements.map((element: DrawElementType) => (
                        <SortableElementList element={element} />
                    ))}
                </div>
            </section>

            <Footer />
        </aside>
    )
}
