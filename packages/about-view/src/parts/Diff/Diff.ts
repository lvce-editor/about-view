import type { AboutState } from '../AboutState/AboutState.ts'
import * as DiffModules from '../DiffModules/DiffModules.ts'

export const diff = (oldState: AboutState, newState: AboutState): readonly number[] => {
  const diffResult: number[] = []
  for (const module of DiffModules.modules) {
    if (!module.isEqual(oldState, newState)) {
      diffResult.push(module.diffType)
    }
  }
  return diffResult
}
