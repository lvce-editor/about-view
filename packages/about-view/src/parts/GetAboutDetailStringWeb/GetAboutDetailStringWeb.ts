import * as FormatAboutDate from '../FormatAboutDate/FormatAboutDate.ts'
import * as GetBrowser from '../GetBrowser/GetBrowser.ts'
import * as Process from '../Process/Process.ts'

export const getDetailStringWeb = (): readonly string[] => {
  const { version } = Process
  const { commit } = Process
  const { date } = Process
  const now = Date.now()
  const formattedDate = FormatAboutDate.formatAboutDate(date, now)
  const browser = GetBrowser.getBrowser()
  const lines = [`Version: ${version}`, `Commit: ${commit}`, `Date: ${formattedDate}`, `Browser: ${browser}`]
  return lines
}
