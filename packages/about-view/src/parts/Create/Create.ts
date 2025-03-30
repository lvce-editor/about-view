import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStates from '../AboutStates/AboutStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number): void => {
  const state: AboutState = {
    focusId: 0,
    lines: [],
    productName: '',
  }
  AboutStates.set(uid, state, state)
}
