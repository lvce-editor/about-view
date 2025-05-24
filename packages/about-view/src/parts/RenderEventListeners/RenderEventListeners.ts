import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenersFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenersFunctions.HandleClickButton,
      params: ['handleClickButton', 'event.target.name'],
    },
    {
      name: DomEventListenersFunctions.HandleClickClose,
      params: ['handleClickClose'], // TODO
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
  ]
}
