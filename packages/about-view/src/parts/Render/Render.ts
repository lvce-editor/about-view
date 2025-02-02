import type { AboutState } from '../AboutState/AboutState.ts'
import * as Diff from '../Diff/Diff.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const doRender = (oldState: AboutState, newState: AboutState): any => {
  const diffResult = Diff.diff(oldState, newState)
  const commands = []
  for (const item of diffResult) {
    const fn = GetRenderer.getRenderer(item)
    commands.push(fn.apply(oldState, newState))
  }
  return commands
}
