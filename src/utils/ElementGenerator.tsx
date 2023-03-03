import { DrawElementType, ShapeType } from '../types'
import { defaultValue } from './defaultValue'

const generateId = () => Date.now().toString()

// Adding Text to main element
export const addNewTextElement = (x: number, y: number, zIndex: number) => {
    const newElement: DrawElementType = {
        type: 'text',
        id: generateId(),
        x: x,
        y: y,
        zIndex: zIndex,
        detail: {
            text: defaultValue.text.value,
            fontSize: defaultValue.text.fontSize,
            fontFamily: defaultValue.text.fontFamily,
            color: defaultValue.text.color,
        },
        visible: true,
        onEditMode: false,
    }

    return newElement
}

export const addNewShapeElement = (
    x: number,
    y: number,
    zIndex: number,
    currentShape: ShapeType
) => {
    const newElement: DrawElementType = {
        type: 'shape',
        subType: currentShape,
        id: generateId(),
        x: x,
        y: y,
        zIndex: zIndex,
        detail: {
            shape: currentShape,
            width: defaultValue.shape.width,
            height: defaultValue.shape.height,
            color: defaultValue.shape.color,
            borderColor: defaultValue.shape.borderColor,
            borderWidth: defaultValue.shape.borderWidth,
            borderRadius: defaultValue.shape.borderRadius,
        },
        visible: true,
    }

    return newElement
}
