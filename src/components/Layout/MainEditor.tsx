import { useAtom, useAtomValue } from 'jotai'
import {
    bgWidthAtom,
    bgHeightAtom,
    bgColorAtom,
    currentToolAtom,
} from '../../state/jotaiState'

import { addText } from '../../utils/tools'

export default function MainEditor() {
    const [width] = useAtom(bgWidthAtom)
    const [height] = useAtom(bgHeightAtom)
    const [bgColor] = useAtom(bgColorAtom)
    const currentTool = useAtomValue(currentToolAtom)

    const handleClick = (e: React.MouseEvent) => {
        if (currentTool === 'background') return

        // get x and y coordinate relative to the div
        const x = e.clientX - e.currentTarget.getBoundingClientRect().left
        const y = e.clientY - e.currentTarget.getBoundingClientRect().top

        switch (currentTool) {
            case 'text':
                addText(e, x, y)
                break
            default:
                break
        }
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
                onClick={(e) => handleClick(e)}></div>
        </main>
    )
}
