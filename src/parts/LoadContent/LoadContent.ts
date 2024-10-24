import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import type { AboutState } from '../AboutState/AboutState.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as Process from '../Process/Process.ts'

export const loadContent = async (state: AboutState): Promise<AboutState> => {
  const lines = await GetAboutDetailStringWeb.getDetailStringWeb()
  return {
    ...state,
    productName: Process.productNameLong,
    lines,
    focusId: AboutFocusId.Ok,
  }
}
