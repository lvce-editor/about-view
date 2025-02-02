import type { AboutState } from '../AboutState/AboutState.ts'
import * as DiffAbout from '../DiffAbout/DiffAbout.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'

const modules = [DiffAbout, DiffFocus]

export const diff = (oldState: AboutState, newState: AboutState): readonly number[] => {
  const diffResult: number[] = []
  for (const module of modules) {
    if (!module.isEqual(oldState, newState)) {
      diffResult.push(module.diffType)
    }
  }
  return diffResult
}
