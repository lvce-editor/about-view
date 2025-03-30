import * as AboutStates from '../AboutStates/AboutStates.ts'

export const dispose = (uid: number): void => {
  AboutStates.remove(uid)
}
