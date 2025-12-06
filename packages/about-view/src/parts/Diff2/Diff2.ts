import * as AboutStates from '../AboutStates/AboutStates.ts'
import * as Diff from '../Diff/Diff.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { newState, oldState } = AboutStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
