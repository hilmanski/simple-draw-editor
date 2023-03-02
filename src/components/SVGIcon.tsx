import { useState } from 'react'

export default function SVGIcon({
    children,
    tooltipText,
    onClick,
    width = 24,
    height = 24,
}: {
    children: any
    tooltipText?: string
    onClick?: () => void
    width?: number
    height?: number
}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="relative" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {children}
            </svg>

            {tooltipText && (
                <div
                    className={`absolute -top-7 -left-5 bg-slate-800 text-gray-200 text-xs px-2 py-1 rounded
                                    ${isHovered ? 'block' : 'hidden'} `}>
                    {tooltipText}
                </div>
            )}
        </section>
    )
}
