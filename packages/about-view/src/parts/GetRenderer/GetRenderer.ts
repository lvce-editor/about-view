import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutStrings from '../AboutStrings/AboutStrings.ts'
import * as DiffAbout from '../DiffAbout/DiffAbout.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as GetFocusSelector from '../GetFocusSelector/GetFocusSelector.ts'

const renderDialog = {
  isEqual: DiffAbout.isEqual,
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
  isEqual: DiffFocus.isEqual,
  apply(oldState: AboutState, newState: AboutState): any {
    const name = GetFocusSelector.getFocusSelector(newState.focusId)
    return ['Viewlet.focusElementByName', name]
  },
}

export const getRenderer = (diffType: number): any => {
  switch (diffType) {
    case DiffType.RenderAbout:
      return renderDialog
    case DiffType.RenderFocus:
      return renderFocus
    default:
      throw new Error('unknown renderer')
  }
}
