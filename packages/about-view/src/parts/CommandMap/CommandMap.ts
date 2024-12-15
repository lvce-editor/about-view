import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetAboutDetailString from '../GetAboutDetailString/GetAboutDetailString.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleClickCopy from '../HandleClickCopy/HandleClickCopy.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render from '../Render/Render.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as ShowAboutElectron from '../ShowAboutElectron/ShowAboutElectron.ts'

export const commandMap = {
  'About.focusNext': FocusNext.focusNext,
  'About.focusPrevious': FocusPrevious.focusPrevious,
  'About.getDetailString': GetAboutDetailString.getDetailString,
  'About.getDetailStringWeb': GetAboutDetailStringWeb.getDetailStringWeb,
  'About.getKeyBindings': GetKeyBindings.getKeyBindings,
  'About.getVirtualDom': GetAboutVirtualDom.getAboutVirtualDom,
  'About.handleClickCopy': HandleClickCopy.handleClickCopy,
  'About.loadContent': LoadContent.loadContent,
  'About.render': Render.doRender,
  'About.renderEventListeners': RenderEventListeners.renderEventListeners,
  'About.showAboutElectron': ShowAboutElectron.showAboutElectron,
}
