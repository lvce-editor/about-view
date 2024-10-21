import type { AboutState } from '../AboutState/AboutState.ts'
import * as GetPreviousFocus from '../GetPreviousFocus/GetPreviousFocus.js'

export const focusPrevious = (state: AboutState): AboutState => {
  const { focusId } = state
  return {
    ...state,
    focusId: GetPreviousFocus.getPreviousFocus(focusId),
  }
}
