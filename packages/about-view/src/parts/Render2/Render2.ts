import * as AboutStates from '../AboutStates/AboutStates.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'

export const doRender = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = AboutStates.get(uid)
  return ApplyRender.applyRender(oldState, newState, diffResult)
}
