import { useAtom } from 'jotai'
import { currentToolAtom } from '../state/jotaiState'
import SVGIcon from './SVGIcon'

export default function ToolSetting() {
    const [currentTool, setCurrentTool] = useAtom(currentToolAtom)

    return (
        <section className="flex space-x-2 items-center">
            <SVGIcon
                tooltipText="Background"
                onClick={() => setCurrentTool('background')}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            </SVGIcon>

            <SVGIcon tooltipText="Text" onClick={() => setCurrentTool('text')}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                <path d="M12 16v-7"></path>
                <path d="M9 9h6"></path>
            </SVGIcon>

            <SVGIcon
                tooltipText="Shape"
                onClick={() => setCurrentTool('shape')}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 7l0 10"></path>
                <path d="M7 5l10 0"></path>
                <path d="M7 19l10 0"></path>
                <path d="M19 7l0 10"></path>
            </SVGIcon>
        </section>
    )
}
