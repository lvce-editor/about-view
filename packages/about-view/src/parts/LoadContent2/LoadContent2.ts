import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as LoadConfig from '../LoadConfig/LoadConfig.ts'

export const loadContent2 = async (state: AboutState): Promise<AboutState> => {
  const config = await LoadConfig.loadConfig()
  return {
    ...state,
    focusId: AboutFocusId.Ok,
    lines: GetAboutDetailStringWeb.getDetailStringWeb(config),
    productName: config.productName,
  }
}
