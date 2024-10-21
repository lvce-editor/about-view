import * as FormatAboutDate from '../FormatAboutDate/FormatAboutDate.ts'
import * as GetBrowser from '../GetBrowser/GetBrowser.ts'
import * as Process from '../Process/Process.ts'

export const getDetailStringWeb = () => {
  const version = Process.version
  const commit = Process.commit
  const date = Process.date
  const formattedDate = FormatAboutDate.formatAboutDate(date)
  const browser = GetBrowser.getBrowser()
  const lines = [`Version: ${version}`, `Commit: ${commit}`, `Date: ${formattedDate}`, `Browser: ${browser}`]
  return lines
}
