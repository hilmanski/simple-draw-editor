import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import {
    currentElementAtom,
    currentShapeAtom,
    drawElementsAtom,
} from '../../state/jotaiState'

import { defaultValue } from '../../utils/defaultValue'
import SVGIcon from '../SVGIcon'

export default function ShapeSetting() {
    const [drawElements, setDrawElements] = useAtom(drawElementsAtom)
    const [currentElement, _] = useAtom(currentElementAtom)
    const [currentShape, setCurrentShape] = useAtom(currentShapeAtom)

    const [width, setWidth] = useState<number>(defaultValue.shape.width)
    const [height, setHeight] = useState<number>(defaultValue.shape.height)
    const [color, setColor] = useState<string>(defaultValue.shape.color)
    const [borderRadius, setBorderRadius] = useState<number>(
        defaultValue.shape.borderRadius
    )
    const [borderWidth, setBorderWidth] = useState<number>(
        defaultValue.shape.borderWidth
    )
    const [borderColor, setBorderColor] = useState<string>(
        defaultValue.shape.borderColor
    )

    const highlightSelectedTool = (tool: string) => {
        if (currentShape === tool) return 'bg-gray-400'
        return ''
    }

    useEffect(() => {
        if (currentElement == null) return

        if (currentElement.type === 'shape') {
            setWidth(currentElement.detail.width)
            setHeight(currentElement.detail.height)
            setColor(currentElement.detail.color)
            setBorderRadius(currentElement.detail.borderRadius)
            setBorderWidth(currentElement.detail.borderWidth)
            setBorderColor(currentElement.detail.borderColor)
        }
    }, [currentElement])

    const updateWidth = (newWidth: number) => {
        setWidth(newWidth)
        updateElement('width', newWidth)
    }

    const updateHeight = (newHeight: number) => {
        setHeight(newHeight)
        updateElement('height', newHeight)
    }

    const updateColor = (newColor: string) => {
        setColor(newColor)
        updateElement('color', newColor)
    }

    const updateBorderColor = (newBorderColor: string) => {
        setBorderColor(newBorderColor)
        updateElement('borderColor', newBorderColor)
    }

    const updateBorderRadius = (newBorderRadius: number) => {
        setBorderRadius(newBorderRadius)
        updateElement('borderRadius', newBorderRadius)
    }

    const updateBorderWidth = (newBorderWidth: number) => {
        setBorderWidth(newBorderWidth)
        updateElement('borderWidth', newBorderWidth)
    }

    const updateElement = (key: string, value: any) => {
        if (currentElement == null) return

        if (currentElement.type === 'shape') {
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

    return (
        <section>
            <p className="font-semibold mb-5">Choose Shape</p>

            <div className="flex items-center space-x-2">
                <div
                    className={`
                    ${highlightSelectedTool('rectangle')}
                `}>
                    <SVGIcon
                        onClick={() => {
                            setCurrentShape('rectangle')
                        }}>
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    </SVGIcon>
                </div>

                <div
                    className={`
                    ${highlightSelectedTool('circle')}
                `}>
                    <SVGIcon
                        onClick={() => {
                            setCurrentShape('circle')
                        }}>
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    </SVGIcon>
                </div>
            </div>

            <section className="mt-5">
                <div>
                    <label htmlFor="width" className="block">
                        Width
                    </label>
                    <input
                        type="number"
                        id="width"
                        className="mr-2 p-1 rounded w-[120px]"
                        value={width}
                        onChange={(e) => updateWidth(parseInt(e.target.value))}
                    />{' '}
                    px
                </div>

                <div>
                    <label htmlFor="height" className="block">
                        Height
                    </label>
                    <input
                        type="number"
                        id="height"
                        className="mr-2 p-1 rounded w-[120px]"
                        value={height}
                        onChange={(e) => updateHeight(parseInt(e.target.value))}
                    />{' '}
                    px
                </div>

                <div>
                    <label htmlFor="color" className="">
                        Color
                    </label>
                    <input
                        type="color"
                        id="color"
                        className="block p-1 "
                        value={color}
                        onChange={(e) => updateColor(e.target.value)}
                    />
                </div>

                <p className="mt-2 mb-2">Border</p>

                {currentShape !== 'circle' && (
                    <div>
                        <label htmlFor="borderRadius" className="block">
                            Border Radius
                        </label>
                        <input
                            type="number"
                            id="borderRadius"
                            className="mr-2 p-1 rounded w-[120px]"
                            value={borderRadius}
                            onChange={(e) =>
                                updateBorderRadius(parseInt(e.target.value))
                            }
                        />{' '}
                        px
                    </div>
                )}

                <div>
                    <label htmlFor="borderWidth" className="block">
                        Border Width
                    </label>
                    <input
                        type="number"
                        id="borderWidth"
                        className="mr-2 p-1 rounded w-[120px]"
                        value={borderWidth}
                        onChange={(e) =>
                            updateBorderWidth(parseInt(e.target.value))
                        }
                    />{' '}
                    px
                </div>

                <div>
                    <label htmlFor="borderColor" className="block">
                        Border Color
                    </label>
                    <input
                        type="color"
                        id="borderColor"
                        className="block p-1 "
                        value={borderColor}
                        onChange={(e) => updateBorderColor(e.target.value)}
                    />
                </div>
            </section>
        </section>
    )
}
