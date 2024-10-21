import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetAboutDetailString from '../GetAboutDetailString/GetAboutDetailString.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as Render from '../Render/Render.ts'

export const commandMap = {
  'About.focusNext': FocusNext.focusNext,
  'About.focusPrevious': FocusPrevious.focusPrevious,
  'About.getDetailString': GetAboutDetailString.getDetailString,
  'About.getDetailStringWeb': GetAboutDetailStringWeb.getDetailStringWeb,
  'About.getVirtualDom': GetAboutVirtualDom.getAboutVirtualDom,
  'About.render': Render.doRender,
}
