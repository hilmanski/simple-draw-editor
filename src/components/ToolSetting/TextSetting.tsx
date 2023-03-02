import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { currentElementAtom, drawElementsAtom } from '../../state/jotaiState'

export default function TextSetting() {
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [currentElement, _] = useAtom(currentElementAtom)

    const [fontSize, setFontSize] = useState<number>(24)
    const [fontFamily, setFontFamily] = useState<string>('sans-serif')
    const [color, setColor] = useState<string>('#000000')

    const updateFontSize = (newFontSize: number) => {
        setFontSize(newFontSize)
        updateElement('fontSize', newFontSize)
    }

    const updateFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFontFamily(e.target.value)
        updateElement('fontFamily', e.target.value)
    }

    const updateColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
        updateElement('color', e.target.value)
    }

    const updateElement = (key: string, value: any) => {
        if (currentElement == null) return

        if (currentElement.type === 'text') {
            const newElements = drawElements.map((element) => {
                if (element.id === currentElement.id) {
                    return {
                        ...element,
                        detail: {
                            ...element.detail,
                            [key]: value,
                        },
                    }
                }
                return element
            })

            setDrawElements(newElements)
        }
    }

    useEffect(() => {
        if (currentElement == null) return

        if (currentElement.type === 'text') {
            setFontSize(currentElement.detail.fontSize)
            setFontFamily(currentElement.detail.fontFamily)
            setColor(currentElement.detail.color)
        }
    }, [currentElement])

    return (
        <section>
            <p className="font-semibold mb-3">Text</p>

            <div>
                <label htmlFor="fontSize" className="block mb">
                    Font Size
                </label>
                <input
                    type="number"
                    id="fontSize"
                    className="mr-2 p-1 rounded w-[120px]"
                    value={fontSize}
                    onChange={(e) => updateFontSize(parseInt(e.target.value))}
                />{' '}
                px
            </div>

            <div className="mt-2 flex space-x-1 text-xs">
                <span
                    onClick={() => updateFontSize(35)}
                    className="py-1 px-2 rounded border-slate-900 border cursor-pointer">
                    XL
                </span>

                <span
                    onClick={() => updateFontSize(24)}
                    className="py-1 px-2 rounded border-slate-900 border cursor-pointer">
                    MD
                </span>

                <span
                    onClick={() => updateFontSize(20)}
                    className="py-1 px-2 rounded border-slate-900 border cursor-pointer">
                    S
                </span>
            </div>

            <div>
                <label htmlFor="fontFamily" className="block mb mt-3">
                    Font Family
                </label>
                <select
                    id="fontFamily"
                    className="mr-2 p-1 rounded w-[120px]"
                    value={fontFamily}
                    onChange={updateFontFamily}>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
            </div>

            <div>
                <label htmlFor="color" className="block mb mt-3">
                    Color
                </label>
                <input
                    type="color"
                    id="color"
                    className="mr-2 p-1 rounded w-[120px]"
                    value={color}
                    onChange={updateColor}
                />
            </div>

            <p className="mt-5 text-sm text-gray-800">
                Hint:
                <li> click on canvas to add text</li>
                <li>Double click on text to edit</li>
            </p>
        </section>
    )
}
