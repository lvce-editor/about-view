import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStrings from '../AboutStrings/AboutStrings.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'

export const renderDialog = (oldState: AboutState, newState: AboutState): any => {
  const okMessage = AboutStrings.ok()
  const copyMessage = AboutStrings.copy()
  const closeMessage = AboutStrings.closeDialog()
  const infoMessage = AboutStrings.info()
  const dom = GetAboutVirtualDom.getAboutVirtualDom(newState.productName, newState.lines, closeMessage, okMessage, copyMessage, infoMessage)
  return ['Viewlet.setDom2', dom]
}
