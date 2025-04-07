import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStates from '../AboutStates/AboutStates.ts'

export interface WrappedFn {
  (uid: number, ...args: readonly any[]): Promise<void>
}

interface Fn {
  (state: AboutState, ...args: readonly any[]): AboutState | Promise<AboutState>
}

export const wrapCommand = (fn: Fn): WrappedFn => {
  const wrapped = async (uid: number, ...args: readonly any[]): Promise<void> => {
    const { newState } = AboutStates.get(uid)
    const newerState = await fn(newState, ...args)
    if (newState === newerState) {
      return
    }
    const latest = AboutStates.get(uid)
    AboutStates.set(uid, latest.oldState, newerState)
  }
  return wrapped
}
