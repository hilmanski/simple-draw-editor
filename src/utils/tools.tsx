// Adding Text to main element
export const addText = (e: React.MouseEvent, x: number, y: number) => {
    const span = document.createElement('span') as HTMLSpanElement
    span.classList.add('text')
    span.style.position = 'absolute'
    span.style.left = `${x}px`
    span.style.top = `${y}px`
    span.textContent = 'Text'
    e.currentTarget.appendChild(span)
}
