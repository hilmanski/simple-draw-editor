// Atom jotai state
// for initial state for shared state

import { atom } from 'jotai'
import { DrawElementType, ToolType, ShapeType } from '../types'

// General setting
export const currentToolAtom = atom<ToolType>('background')
export const currentShapeAtom = atom<ShapeType>('rectangle')
export const drawElementsAtom = atom<any[]>([])
export const currentElementAtom = atom<DrawElementType | null>(null)

// Background setting
export const bgWidthAtom = atom<number>(500)
export const bgHeightAtom = atom<number>(500)
export const bgColorAtom = atom<string>('#ffffff')
