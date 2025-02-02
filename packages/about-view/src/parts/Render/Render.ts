import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStrings from '../AboutStrings/AboutStrings.ts'
import * as DiffAbout from '../DiffAbout/DiffAbout.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as GetFocusSelector from '../GetFocusSelector/GetFocusSelector.ts'

const renderDialog = {
  isEqual:DiffAbout.isEqual,
  apply(oldState: AboutState, newState: AboutState): any {
    const okMessage = AboutStrings.ok()
    const copyMessage = AboutStrings.copy()
    const closeMessage = AboutStrings.closeDialog()
    const infoMessage = AboutStrings.info()
    const dom = GetAboutVirtualDom.getAboutVirtualDom(newState.productName, newState.lines, closeMessage, okMessage, copyMessage, infoMessage)
    return ['Viewlet.setDom2', dom]
  },
}

const renderFocus = {
  isEqual:DiffFocus.isEqual,
  apply(oldState: AboutState, newState: AboutState): any {
    const name = GetFocusSelector.getFocusSelector(newState.focusId)
    return ['Viewlet.focusElementByName', name]
  },
}

const render = [renderDialog, renderFocus]

export const doRender = (oldState: AboutState, newState: AboutState): any => {
  const commands = []
  for (const fn of render) {
    if (!fn.isEqual(oldState, newState)) {
      commands.push(fn.apply(oldState, newState))
    }
  }
  return commands
}
