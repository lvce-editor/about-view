import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/Process/Process.ts', () => {
  return {
    getElectronVersion(): string {
      return '0.0.0-dev'
    },
    getNodeVersion(): string {
      return '0.0.0-dev'
    },
    getChromeVersion(): string {
      return '0.0.0-dev'
    },
    getVersion(): string {
      return '0.0.0-dev'
    },
    getCommit(): string {
      return 'abc'
    },
    getV8Version(): string {
      return '0.0.0-dev'
    },
    getDate(): string {
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
