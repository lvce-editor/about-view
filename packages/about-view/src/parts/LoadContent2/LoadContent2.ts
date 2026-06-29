import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import { commit } from '../Commit/Commit.ts'
import { commitDate } from '../CommitDate/CommitDate.ts'
import * as FormatAboutDate from '../FormatAboutDate/FormatAboutDate.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as GetBrowser from '../GetBrowser/GetBrowser.ts'
import * as LoadConfig from '../LoadConfig/LoadConfig.ts'
import * as Process from '../Process/Process.ts'
import { version } from '../Version/Version.ts'

const getDetailStringFromConfig = async (state: AboutState): Promise<readonly string[]> => {
  const now = Date.now()
  try {
    const config = await LoadConfig.loadConfig(state)
    const resolvedVersion = config.version || version
    const resolvedCommit = config.commit || commit
    const resolvedDate = config.date || commitDate
    const formattedDate = FormatAboutDate.formatAboutDate(resolvedDate, now)
    const browser = GetBrowser.getBrowser()
    return [`Version: ${resolvedVersion}`, `Commit: ${resolvedCommit}`, `Date: ${formattedDate}`, `Browser: ${browser}`]
  } catch {
    return GetAboutDetailStringWeb.getDetailStringWeb()
  }
}

export const loadContent2 = async (state: AboutState): Promise<AboutState> => {
  const lines = state.useNewLoadConfig ? await getDetailStringFromConfig(state) : GetAboutDetailStringWeb.getDetailStringWeb()
  const productName = await Process.getProductNameLong()
  return {
    ...state,
    focusId: AboutFocusId.Ok,
    lines,
    productName,
  }
}
