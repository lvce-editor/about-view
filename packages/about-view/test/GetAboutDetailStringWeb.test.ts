import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/Process/Process.ts', () => {
  return {
    version: '0.0.0-dev',
    commit: 'abc',
    date: 'n/a',
  }
})

jest.unstable_mockModule('../src/parts/GetBrowser/GetBrowser.ts', () => {
  return {
    getBrowser(): string {
      return 'Browser: Node.js/22'
    },
  }
})

import * as GetAboutDetailStringWeb from '../src/parts/GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'

test('getDetailStringWeb', () => {
  expect(GetAboutDetailStringWeb.getDetailStringWeb()).toEqual([
    'Version: 0.0.0-dev',
    'Commit: abc',
    'Date: Invalid Date: n/a',
    'Browser: Browser: Node.js/22',
  ])
})
