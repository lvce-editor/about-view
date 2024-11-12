import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/Process/Process.ts', () => {
  return {
    getElectronVersion() {
      return '0.0.0-dev'
    },
    getNodeVersion() {
      return '0.0.0-dev'
    },
    getChromeVersion() {
      return '0.0.0-dev'
    },
    getVersion() {
      return '0.0.0-dev'
    },
    getCommit() {
      return 'abc'
    },
    getV8Version() {
      return '0.0.0-dev'
    },
    getDate() {
      return 'n/a'
    },
  }
})

const GetAboutDetailString = await import('../src/parts/GetAboutDetailString/GetAboutDetailString.ts')

test('getDetailStringWeb', async () => {
  expect(await GetAboutDetailString.getDetailString()).toBe(
    `Version: 0.0.0-dev
Commit: abc
Date: Invalid Date: n/a
Electron: 0.0.0-dev
Chromium: 0.0.0-dev
Node: 0.0.0-dev
V8: 0.0.0-dev`,
  )
})
