// Atom jotai state
// for initial state for shared state

import { atom } from 'jotai'
import { DrawElementType, ToolType, ShapeType } from '../types'
import { defaultValue } from '../utils/defaultValue'

// General setting
export const currentToolAtom = atom<ToolType>('background')
export const currentShapeAtom = atom<ShapeType>('rectangle')
export const drawElementsAtom = atom<any[]>([])
export const currentElementAtom = atom<DrawElementType | null>(null)
export const drawElementIdsAtom = atom<string[]>([])

// Background setting
export const bgWidthAtom = atom<number>(defaultValue.background.width)
export const bgHeightAtom = atom<number>(defaultValue.background.height)
export const bgColorAtom = atom<string>(defaultValue.background.color)
