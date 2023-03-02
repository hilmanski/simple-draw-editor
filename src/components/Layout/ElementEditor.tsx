import ToolSetting from '../ToolSetting'
import BackgroundSetting from '../ToolSetting/BackgroundSetting'

export default function ElementEditor() {
    return (
        <aside className="px-5 pt-5 bg-gray-300 min-h-screen">
            <p className="font-semibold mb-5">Settings</p>

            <ToolSetting />

            <section className="mt-10">
                <BackgroundSetting />
            </section>
        </aside>
    )
}
