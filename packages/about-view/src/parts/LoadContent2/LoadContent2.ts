import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as Process from '../Process/Process.ts'

export const loadContent2 = async (state: AboutState): Promise<AboutState> => {
  const lines = GetAboutDetailStringWeb.getDetailStringWeb()
  const productName = await Process.getProductNameLong()
  return {
    ...state,
    focusId: AboutFocusId.Ok,
    lines,
    productName,
  }
}
