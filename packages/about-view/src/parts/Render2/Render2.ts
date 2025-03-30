import * as AboutStates from '../AboutStates/AboutStates.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'

export const doRender = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = AboutStates.get(uid)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  AboutStates.set(uid, newState, newState)
  return commands
}
