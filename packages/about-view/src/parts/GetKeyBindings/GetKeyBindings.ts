import { KeyCode, KeyModifier } from '@lvce-editor/virtual-dom-worker'
import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      key: KeyCode.Escape,
      command: 'About.handleClickClose',
      when: WhenExpression.FocusAbout,
    },
    {
      key: KeyCode.Tab,
      command: 'About.focusNext',
      when: WhenExpression.FocusAbout,
    },
    {
      key: KeyCode.Tab | KeyModifier.Shift,
      command: 'About.focusPrevious',
      when: WhenExpression.FocusAbout,
    },
  ]
}
