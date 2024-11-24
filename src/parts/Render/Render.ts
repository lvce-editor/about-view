import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStrings from '../AboutStrings/AboutStrings.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as GetFocusSelector from '../GetFocusSelector/GetFocusSelector.ts'

const renderDialog = {
  isEqual(oldState: AboutState, newState: AboutState): boolean {
    return oldState.productName === newState.productName && oldState.lines === newState.lines
  },
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
  isEqual(oldState: AboutState, newState: AboutState): boolean {
    return oldState.focusId === newState.focusId
  },
  apply(oldState: AboutState, newState: AboutState): any {
    const selector = GetFocusSelector.getFocusSelector(newState.focusId)
    return ['setFocused', selector]
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
