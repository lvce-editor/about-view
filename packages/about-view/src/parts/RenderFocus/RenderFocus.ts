import type { AboutState } from '../AboutState/AboutState.ts'
import * as GetFocusSelector from '../GetFocusSelector/GetFocusSelector.ts'

export const renderFocus = (oldState: AboutState, newState: AboutState): any => {
  const name = GetFocusSelector.getFocusSelector(newState.focusId)
  return ['Viewlet.focusElementByName', name]
}
