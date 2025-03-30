import type { AboutState } from '../AboutState/AboutState.ts'

const states = Object.create(null)

export const get = (
  uid: string | number,
): {
  oldState: AboutState
  newState: AboutState
} => {
  return states[uid]
}

export const clear = (): void => {
  for (const key of Object.keys(states)) {
    delete states[key]
  }
}

export const getKeys = (): readonly string[] => {
  return Object.keys(states)
}

export const set = (uid: string | number, oldState: AboutState, newState: AboutState): void => {
  states[uid] = {
    oldState,
    newState,
  }
}
