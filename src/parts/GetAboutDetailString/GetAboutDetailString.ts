import * as FormatAboutDate from '../FormatAboutDate/FormatAboutDate.ts'
import * as JoinLines from '../JoinLines/JoinLines.ts'
import * as Process from '../Process/Process.ts'

export const getDetailString = async () => {
  const [electronVersion, nodeVersion, chromeVersion, version, commit, v8Version, date] = await Promise.all([
    Process.getElectronVersion(),
    Process.getNodeVersion(),
    Process.getChromeVersion(),
    Process.getVersion(),
    Process.getCommit(),
    Process.getV8Version(),
    Process.getDate(),
  ])
  const formattedDate = FormatAboutDate.formatAboutDate(date)
  const lines = [
    `Version: ${version}`,
    `Commit: ${commit}`,
    `Date: ${formattedDate}`,
    `Electron: ${electronVersion}`,
    `Chromium: ${chromeVersion}`,
    `Node: ${nodeVersion}`,
    `V8: ${v8Version}`,
  ]
  return JoinLines.joinLines(lines)
}
