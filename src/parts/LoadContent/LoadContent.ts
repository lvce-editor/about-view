import * as AboutFocusId from '../AboutFocusId/AboutFocusId.js'
import type { AboutState } from '../AboutState/AboutState.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.js'
import * as Process from '../Process/Process.js'

export const loadContent = async (state: AboutState): Promise<AboutState> => {
  const lines = await GetAboutDetailStringWeb.getDetailStringWeb()
  return {
    ...state,
    productName: Process.productNameLong,
    lines,
    focusId: AboutFocusId.Ok,
  }
}
