import type { AboutState } from '../AboutState/AboutState.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff from '../Diff/Diff.ts'

export const doRender = (oldState: AboutState, newState: AboutState): any => {
  const diffResult = Diff.diff(oldState, newState)
  return ApplyRender.applyRender(oldState, newState, diffResult)
}
