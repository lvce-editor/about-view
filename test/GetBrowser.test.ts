import { expect, test, beforeAll } from '@jest/globals'
import * as GetBrowser from '../src/parts/GetBrowser/GetBrowser.ts'

beforeAll(() => {
  // @ts-expect-error
  globalThis.navigator = {
    userAgent: 'test',
  }
})

test('getBrowser', () => {
  expect(GetBrowser.getBrowser()).toBe('test')
})
