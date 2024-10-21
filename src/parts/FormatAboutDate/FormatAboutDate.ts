import * as FormatDate from '../FormatDate/FormatDate.ts'

export const formatAboutDate = (isoDate: string): string => {
  if (!isoDate) {
    return 'unknown'
  }
  const date = new Date(isoDate).getTime()
  if (isNaN(date)) {
    return `Invalid Date: ${isoDate}`
  }
  const now = Date.now()
  const ago = FormatDate.formatDate(date, now)
  return `${isoDate} (${ago})`
}
