import { DrawElementType, ShapeType } from '../types'

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
        visible: true,
        onEditMode: false,
    }

    return newElement
}

export const addNewShapeElement = (
    x: number,
    y: number,
    currentShape: ShapeType
) => {
    const uniqueId = Date.now()

    const newElement: DrawElementType = {
        type: 'shape',
        subType: currentShape,
        id: uniqueId,
        x: x,
        y: y,
        detail: {
            shape: currentShape,
            width: 100,
            height: 100,
            color: '#ffffff',
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius: 5,
        },
        visible: true,
    }

    return newElement
}
