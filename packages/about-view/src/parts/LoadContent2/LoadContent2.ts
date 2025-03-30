import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import * as AboutStates from '../AboutStates/AboutStates.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as Process from '../Process/Process.ts'

export const loadContent2 = (uid: number): void => {
  const lines = GetAboutDetailStringWeb.getDetailStringWeb()
  const { oldState } = AboutStates.get(uid)
  const newState: AboutState = {
    ...oldState,
    productName: Process.productNameLong,
    lines,
    focusId: AboutFocusId.Ok,
  }
  AboutStates.set(uid, oldState, newState)
}
