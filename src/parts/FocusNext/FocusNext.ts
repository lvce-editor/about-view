import type { AboutState } from '../AboutState/AboutState.ts'
import * as GetNextFocus from '../GetNextFocus/GetNextFocus.js'

export const focusNext = (state: AboutState): AboutState => {
  const { focusId } = state
  return {
    ...state,
    focusId: GetNextFocus.getNextFocus(focusId),
  }
}
