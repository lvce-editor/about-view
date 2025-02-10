import * as Diff from '../Diff/Diff.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetAboutDetailString from '../GetAboutDetailString/GetAboutDetailString.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleClickClose from '../HandleClickClose/HandleClickClose.ts'
import * as HandleClickCopy from '../HandleClickCopy/HandleClickCopy.ts'
import * as HandleClickOk from '../HandleClickOk/HandleClickOk.ts'
import * as HandleFocusIn from '../HandleFocusIn/HandleFocusIn.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render from '../Render/Render.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as ShowAbout from '../ShowAbout/ShowAbout.ts'
import * as ShowAboutElectron from '../ShowAboutElectron/ShowAboutElectron.ts'

export const commandMap = {
  'About.diff': Diff.diff,
  'About.focusNext': FocusNext.focusNext,
  'About.focusPrevious': FocusPrevious.focusPrevious,
  'About.getCommandIds': GetCommandIds.getCommandIds,
  'About.getDetailString': GetAboutDetailString.getDetailString,
  'About.getDetailStringWeb': GetAboutDetailStringWeb.getDetailStringWeb,
  'About.getKeyBindings': GetKeyBindings.getKeyBindings,
  'About.getVirtualDom': GetAboutVirtualDom.getAboutVirtualDom,
  'About.handleClickClose': HandleClickClose.handleClickClose,
  'About.handleClickCopy': HandleClickCopy.handleClickCopy,
  'About.handleClickOk': HandleClickOk.handleClickOk,
  'About.handleFocusIn': HandleFocusIn.handleFocusIn,
  'About.loadContent': LoadContent.loadContent,
  'About.render': Render.doRender,
  'About.renderEventListeners': RenderEventListeners.renderEventListeners,
  'About.showAbout': ShowAbout.showAbout,
  'About.showAboutElectron': ShowAboutElectron.showAboutElectron,
}
