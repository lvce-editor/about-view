import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'
import * as KeyModifier from '../KeyModifier/KeyModifier.ts'

export const getKeyBindings = () => {
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
