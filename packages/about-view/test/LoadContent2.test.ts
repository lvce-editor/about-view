import { beforeEach, expect, jest, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'

const detailString = ['Version: 1.0.0', 'Build: 123']

jest.unstable_mockModule('../src/parts/GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts', () => ({
  getDetailStringWeb: () => detailString,
}))

jest.unstable_mockModule('../src/parts/Process/Process.ts', () => ({
  productNameLong: 'Lvce Editor - OSS',
}))

const LoadContent2 = await import('../src/parts/LoadContent2/LoadContent2.ts')

beforeEach(() => {
  AboutStates.clear()
})

test('loadContent2', async () => {
  const uid = 1
  const oldState: AboutState = {
    productName: 'Old Name',
    lines: ['old line'],
    focusId: AboutFocusId.Ok,
  }
  AboutStates.set(uid, oldState, oldState)

  LoadContent2.loadContent2(uid)

  const { newState } = AboutStates.get(uid)
  expect(newState).toEqual({
    productName: 'Lvce Editor - OSS',
    lines: detailString,
    focusId: AboutFocusId.Ok,
  })
})
