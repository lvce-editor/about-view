import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocusIn = async (state: AboutState): Promise<AboutState> => {
  // TODO remove side effect
  await RendererWorker.invoke('Focus.setFocus', WhenExpression.FocusAbout)
  if (state.focusId) {
    return state
  }
  return {
    ...state,
    focusId: AboutFocusId.Ok,
  }
}
