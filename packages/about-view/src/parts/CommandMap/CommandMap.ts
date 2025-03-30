import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
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
import * as Render2 from '../Render2/Render2.ts'
import * as Render from '../Render/Render.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as ShowAbout from '../ShowAbout/ShowAbout.ts'
import * as ShowAboutElectron from '../ShowAboutElectron/ShowAboutElectron.ts'

export const commandMap = {
  'About.create': Create.create,
  'About.diff2': Diff2.diff2,
  'About.focusNext': FocusNext.focusNext,
  'About.focusPrevious': FocusPrevious.focusPrevious,
  'About.getCommandIds': GetCommandIds.getCommandIds,
  'About.getKeyBindings': GetKeyBindings.getKeyBindings,
  'About.handleClickClose': HandleClickClose.handleClickClose,
  'About.handleClickCopy': HandleClickCopy.handleClickCopy,
  'About.handleClickOk': HandleClickOk.handleClickOk,
  'About.handleFocusIn': HandleFocusIn.handleFocusIn,
  'About.loadContent': LoadContent.loadContent,
  'About.render2': Render2.doRender,
  'About.renderEventListeners': RenderEventListeners.renderEventListeners,
  'About.showAbout': ShowAbout.showAbout,
  'About.showAboutElectron': ShowAboutElectron.showAboutElectron,

  // deprecated
  'About.diff': Diff.diff,
  'About.render': Render.doRender,
  'About.getVirtualDom': GetAboutVirtualDom.getAboutVirtualDom,
  'About.getDetailString': GetAboutDetailString.getDetailString,
  'About.getDetailStringWeb': GetAboutDetailStringWeb.getDetailStringWeb,
}
