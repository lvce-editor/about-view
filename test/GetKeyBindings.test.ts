import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings', () => {
  expect(GetKeyBindings.getKeyBindings()).toEqual([
    {
      key: 8,
      command: 'About.handleClickClose',
      when: 4,
    },
    {
      key: 2,
      command: 'About.focusNext',
      when: 4,
    },
    {
      key: 1026,
      command: 'About.focusPrevious',
      when: 4,
    },
  ])
})
