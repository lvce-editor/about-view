import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStrings from '../AboutStrings/AboutStrings.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'

const renderDialog = {
  isEqual(oldState: AboutState, newState: AboutState) {
    return oldState.productName === newState.productName && oldState.lines === newState.lines
  },
  apply(oldState: AboutState, newState: AboutState) {
    const okMessage = AboutStrings.ok()
    const copyMessage = AboutStrings.copy()
    const closeMessage = AboutStrings.closeDialog()
    const infoMessage = AboutStrings.info()
    const dom = GetAboutVirtualDom.getAboutVirtualDom(newState.productName, newState.lines, closeMessage, okMessage, copyMessage, infoMessage)
    return ['Viewlet.setDom2', dom]
  },
}

const getFocusSelector = (focusId: number) => {
  switch (focusId) {
    case AboutFocusId.Copy:
      return '.ButtonPrimary'
    case AboutFocusId.Ok:
      return '.ButtonSecondary'
    default:
      return ''
  }
}

const renderFocus = {
  isEqual(oldState: AboutState, newState: AboutState) {
    return oldState.focusId === newState.focusId
  },
  apply(oldState: AboutState, newState: AboutState) {
    const selector = getFocusSelector(newState.focusId)
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
