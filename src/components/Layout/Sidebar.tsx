import { useAtom, useAtomValue } from 'jotai'
import { drawElementIdsAtom, drawElementsAtom } from '../../state/jotaiState'

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
import Footer from './Footer'
import Header from './Header'
import { useEffect } from 'react'

export default function Sidebar() {
    // DNDKit setting for sortable drag n drop
    const [items, setItems] = useAtom(drawElementIdsAtom)
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    function handleDragEnd(event: any) {
        const { active, over } = event

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id)
                const newIndex = items.indexOf(over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    useEffect(() => {
        const newDrawElements = drawElements.map((element) => {
            const index = items.indexOf(element.id)
            return {
                ...element,
                zIndex: index,
            }
        })
        setDrawElements(newDrawElements)
    }, [items])

    return (
        <aside className="">
            <Header />

            <section>
                <p className="mb font-semibold">Element List</p>
                <p className="italic text-sm mb-2 pb border-b border-gray-400">
                    {' '}
                    *Drag n Drop to adjust position{' '}
                </p>

                <div>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}>
                        <SortableContext
                            items={items}
                            strategy={verticalListSortingStrategy}>
                            {items
                                .slice()
                                .reverse()
                                .map((id: string) => (
                                    <SortableElementList key={id} id={id} />
                                ))}
                        </SortableContext>
                    </DndContext>
                </div>
            </section>

            <Footer />
        </aside>
    )
}
