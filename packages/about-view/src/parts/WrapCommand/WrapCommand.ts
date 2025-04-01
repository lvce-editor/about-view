import * as AboutStates from '../AboutStates/AboutStates.ts'

export const wrapCommand = (fn: any): any => {
  const wrapped = async (uid: number, ...args: readonly any[]): Promise<void> => {
    const { newState } = AboutStates.get(uid)
    const newerState = await fn(newState, ...args)
    if (newState === newerState) {
      return
    }
    AboutStates.set(uid, newState, newerState)
  }
  return wrapped
}
