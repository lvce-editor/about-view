import { jest, test, expect } from '@jest/globals'
import { wrapCommand } from '../src/parts/WrapCommand/WrapCommand.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'

const createState = (uid: number): AboutState => ({
  productName: 'test',
  lines: [],
  focusId: 0,
  uid,
})

test('wrapCommand should update state when function returns new state', async () => {
  const uid = 123
  const oldState = createState(uid)
  const newState = { ...oldState, productName: 'new' }

  AboutStates.set(uid, oldState, oldState)

  const fn = async (state: AboutState): Promise<AboutState> => newState
  const wrapped = wrapCommand(fn)
  await wrapped(uid)

  const { newState: currentState } = AboutStates.get(uid)
  expect(currentState).toEqual(newState)
})

test('wrapCommand should not update state when function returns same state', async () => {
  const uid = 123
  const state = createState(uid)

  AboutStates.set(uid, state, state)

  const fn = async (state: AboutState): Promise<AboutState> => state
  const wrapped = wrapCommand(fn)
  await wrapped(uid)

  const { newState: currentState } = AboutStates.get(uid)
  expect(currentState).toEqual(state)
})
