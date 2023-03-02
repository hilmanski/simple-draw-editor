import { useAtom } from 'jotai'
import { bgWidthAtom, bgHeightAtom, bgColorAtom } from '../../state/jotaiState'

export default function MainEditor() {
    const [width] = useAtom(bgWidthAtom)
    const [height] = useAtom(bgHeightAtom)
    const [bgColor] = useAtom(bgColorAtom)

    return (
        <main
            className="pl-10 pr-5 min-h-screen
                flex items-center justify-center "
        >
            <div
                className="border"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: `${bgColor}`,
                }}
            ></div>
        </main>
    )
}
