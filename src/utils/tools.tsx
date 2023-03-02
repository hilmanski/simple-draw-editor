import { DrawElementType } from '../types'

// Adding Text to main element
export const addNewTextElement = (x: number, y: number) => {
    const uniqueId = Date.now()

    const newElement: DrawElementType = {
        type: 'text',
        id: uniqueId,
        x: x,
        y: y,
        detail: {
            text: 'Text',
            fontSize: 24,
            fontFamily: 'sans-serif',
            color: '#000000',
        },
        onEditMode: false,
    }

    return newElement
}
