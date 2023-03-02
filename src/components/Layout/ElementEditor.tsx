import { useAtomValue } from 'jotai'
import { currentToolAtom } from '../../state/jotaiState'

import ToolSetting from '../ToolSetting'
import BackgroundSetting from '../ToolSetting/BackgroundSetting'
import ShapeSetting from '../ToolSetting/ShapeSetting'
import TextSetting from '../ToolSetting/TextSetting'

export default function ElementEditor() {
    const currentTool = useAtomValue(currentToolAtom)

    return (
        <aside className="px-5 pt-5 bg-gray-300 min-h-screen">
            <p className="font-semibold mb-5">Settings</p>

            <ToolSetting />

            <section className="mt-10">
                {currentTool === 'background' && <BackgroundSetting />}
                {currentTool === 'text' && <TextSetting />}
                {currentTool === 'shape' && <ShapeSetting />}
            </section>
        </aside>
    )
}
