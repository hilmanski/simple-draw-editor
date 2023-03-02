import { useAtom, useAtomValue } from 'jotai'
import { useState } from 'react'
import Draggable from 'react-draggable'
import {
    bgWidthAtom,
    bgHeightAtom,
    bgColorAtom,
    currentToolAtom,
} from '../../state/jotaiState'

// import { addText } from '../../utils/tools'

export default function MainEditor() {
    const [width] = useAtom(bgWidthAtom)
    const [height] = useAtom(bgHeightAtom)
    const [bgColor] = useAtom(bgColorAtom)
    const currentTool = useAtomValue(currentToolAtom)

    const [drawElements, setDrawElements] = useState<any[]>([])

    const handleClick = (e: React.MouseEvent) => {
        if (currentTool === 'background') return

        // Prevent if drawElement is dragged/clicked
        if (e.target instanceof HTMLElement) {
            if (e.target.classList.contains('drawElement')) {
                return
            }
        }

        // Get x and y coordinate relative to the div
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
        const newElement = (
            <Draggable>
                <span
                    className="drawElement"
                    style={{
                        position: 'absolute',
                        left: `${x}px`,
                        top: `${y}px`,
                    }}>
                    Text
                </span>
            </Draggable>
        )
        setDrawElements([...drawElements, newElement])
    }

    return (
        <main
            className="pl-10 pr-5 min-h-screen
                flex items-center justify-center ">
            <div
                className="relative border"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: `${bgColor}`,
                }}
                onClick={(e) => handleClick(e)}>
                {drawElements.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </main>
    )
}
