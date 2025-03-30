import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStates from '../AboutStates/AboutStates.ts'

export const create = (uid: number): void => {
  const state: AboutState = {
    uid,
    focusId: 0,
    lines: [],
    productName: '',
  }
  AboutStates.set(uid, state, state)
}
