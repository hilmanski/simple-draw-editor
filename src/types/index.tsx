// Typed information
// Description: This file contains all the types used in the project

export type ToolType = 'background' | 'text' | 'shape'

export type DrawElementType = {
    type: ToolType
    id: number
    x: number
    y: number
    detail: any
    onEditMode?: boolean
}
