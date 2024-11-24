import { expect, test } from '@jest/globals'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'
import * as DomEventListenersFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'

test('renderEventListeners', () => {
  const eventListeners = RenderEventListeners.renderEventListers()
  expect(eventListeners).toEqual([
    {
      name: DomEventListenersFunctions.HandleClickOk,
      params: ['handleClickOk'],
    },
    {
      name: DomEventListenersFunctions.HandleClickClose,
      params: ['handleClickClose'],
    },
    {
      name: DomEventListenersFunctions.HandleClickCopy,
      params: ['handleClickCopy'],
    },
    {
      name: DomEventListenersFunctions.HandleFocusIn,
      params: ['handleFocusIn'],
    },
    {
      name: DomEventListenersFunctions.HandleContextMenu,
      params: [],
      preventDefault: true,
    },
  ])
})
