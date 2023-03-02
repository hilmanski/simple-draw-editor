import { useAtom } from 'jotai'
import { bgWidthAtom, bgHeightAtom, bgColorAtom } from '../../state/jotaiState'

export default function BackgroundSetting() {
    const [width, setWidth] = useAtom(bgWidthAtom)
    const [height, setHeight] = useAtom(bgHeightAtom)
    const [bgColor, setBgColor] = useAtom(bgColorAtom)

    const updateWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(parseInt(e.target.value))
    }

    const updateHeigth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(e.target.value))
    }

    const updateBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBgColor(e.target.value)
    }

    return (
        <section>
            <p className="font-semibold mb-3">Background</p>

            <div>
                <label htmlFor="width" className="inline-block w-[50px]">
                    Width
                </label>
                <input
                    type="number"
                    id="width"
                    className="w-[70px] ml-4 mr-2"
                    value={width}
                    onChange={updateWidth}
                />{' '}
                px
            </div>

            <div className="mt-2">
                <label htmlFor="height" className="inline-block w-[50px]">
                    Height
                </label>
                <input
                    type="number"
                    id="height"
                    className="w-[70px] ml-4 mr-2"
                    value={height}
                    onChange={updateHeigth}
                />{' '}
                px
            </div>

            <div className="mt-2">
                <label htmlFor="bgColor" className="inline-block w-[50px]">
                    Color
                </label>
                <input
                    type="color"
                    id="bgColor"
                    className="ml-4 mr-2"
                    value={bgColor}
                    onChange={updateBgColor}
                />
            </div>
        </section>
    )
}
