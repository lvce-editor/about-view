import { expect, test } from '@jest/globals'
import * as Product from '../src/parts/Product/Product.ts'

test('getProductNameLong', () => {
  expect(Product.getProductNameLong()).toBe('Lvce Editor - OSS')
})
