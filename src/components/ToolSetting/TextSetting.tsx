import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { currentElementAtom, drawElementsAtom } from '../../state/jotaiState'

export default function TextSetting() {
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [currentElement, setCurrentElement] = useAtom(currentElementAtom)

    const [fontSize, setFontSize] = useState<number>(24)
    const [fontFamily, setFontFamily] = useState<string>('sans-serif')
    const [color, setColor] = useState<string>('#000000')

    const updateFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(parseInt(e.target.value))
        updateElement('fontSize', parseInt(e.target.value))
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
                    onChange={updateFontSize}
                />{' '}
                px
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
                *Hint: click on canvas to add text
            </p>
        </section>
    )
}
