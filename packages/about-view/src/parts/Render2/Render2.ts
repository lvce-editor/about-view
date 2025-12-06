import * as AboutStates from '../AboutStates/AboutStates.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'

export const doRender = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { newState, oldState } = AboutStates.get(uid)
  AboutStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
