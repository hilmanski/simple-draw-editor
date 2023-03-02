// Atom jotai state
// for initial state for shared state

import { atom } from 'jotai'
import { ToolType } from '../types'

// General setting
export const currentToolAtom = atom<ToolType>('background')

// Background setting
export const bgWidthAtom = atom<number>(500)
export const bgHeightAtom = atom<number>(500)
export const bgColorAtom = atom<string>('#ffffff')
