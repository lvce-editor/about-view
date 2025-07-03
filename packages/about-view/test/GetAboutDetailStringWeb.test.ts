import { expect, test, beforeAll } from '@jest/globals'
import * as GetAboutDetailStringWeb from '../src/parts/GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'

beforeAll(() => {
  // @ts-expect-error
  globalThis.navigator = {
    userAgent: 'Test',
  }
})

test('getDetailStringWeb', () => {
  expect(GetAboutDetailStringWeb.getDetailStringWeb()).toEqual(['Version: 0.0.0-dev', 'Commit: unknown commit', 'Date: unknown', 'Browser: Test'])
})
