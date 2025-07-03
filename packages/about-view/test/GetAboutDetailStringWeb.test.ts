import { expect, test } from '@jest/globals'
import * as GetAboutDetailStringWeb from '../src/parts/GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'

test('getDetailStringWeb', () => {
  expect(GetAboutDetailStringWeb.getDetailStringWeb()).toEqual([
    'Version: 0.0.0-dev',
    'Commit: unknown commit',
    'Date: unknown',
    'Browser: Node.js/22',
  ])
})
