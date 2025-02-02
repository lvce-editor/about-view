import { expect, test } from '@jest/globals'
import * as AboutStrings from '../src/parts/AboutStrings/AboutStrings.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'

test('unknown', () => {
  expect(() => GetRenderer.getRenderer(0)).toThrow(new Error('unknown renderer'))
})
