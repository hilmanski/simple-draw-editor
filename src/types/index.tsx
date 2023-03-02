// Typed information
// Description: This file contains all the types used in the project

export type ToolType = 'background' | 'text' | 'shape'

export type ShapeType = 'rectangle' | 'circle' | 'triangle' | 'line'

export type DrawElementType = {
    type: ToolType
    id: number
    x: number
    y: number
    detail: any
    visible: boolean
    onEditMode?: boolean
}
