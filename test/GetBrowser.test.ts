import { expect, test, beforeAll } from '@jest/globals'
import * as GetBrowser from '../src/parts/GetBrowser/GetBrowser.ts'

beforeAll(() => {
  // @ts-ignore
  globalThis.navigator = {
    userAgent: 'test',
  }
})

test('getBrowser', () => {
  expect(GetBrowser.getBrowser()).toBe('test')
})
