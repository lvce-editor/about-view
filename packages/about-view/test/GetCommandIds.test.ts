import { expect, test } from '@jest/globals'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds', () => {
  expect(GetCommandIds.getCommandIds()).toEqual([
    'dispose',
    'focusNext',
    'focusPrevious',
    'handleClickButton',
    'handleClickClose',
    'handleClickCopy',
    'handleClickOk',
    'handleFocusIn',
  ])
})
