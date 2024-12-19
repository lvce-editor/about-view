import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as Process from '../Process/Process.ts'

export const loadContent = (state: AboutState): AboutState => {
  const lines = GetAboutDetailStringWeb.getDetailStringWeb()
  return {
    ...state,
    productName: Process.productNameLong,
    lines,
    focusId: AboutFocusId.Ok,
  }
}
