// based on https://github.com/microsoft/vscode/blob/bd782eb059e133d3a20fdb446b8feb0010a278ad/src/vs/base/common/date.ts (License MIT)
import * as FormatDateStrings from '../FormatDateStrings/FormatDateStrings.ts'
import { day, hour, minute, month, week, year } from '../TimeUnit/TimeUnit.ts'

export const formatDateFuture = (seconds: number): string => {
  if (seconds < minute) {
    if (seconds === 1) {
      return FormatDateStrings.inOneSecond()
    }
    return FormatDateStrings.inSomeSeconds(seconds)
  }
  if (seconds < hour) {
    const minutes = Math.floor(seconds / minute)
    if (minutes === 1) {
      return FormatDateStrings.inOneMinute()
    }
    return FormatDateStrings.inSomeMinutes(minutes)
  }
  if (seconds < day) {
    const days = Math.floor(seconds / hour)
    if (days === 1) {
      return FormatDateStrings.inOneHour()
    }
    return FormatDateStrings.inSomeHours(days)
  }
  if (seconds < week) {
    const days = Math.floor(seconds / day)
    if (days === 1) {
      return FormatDateStrings.inOneDay()
    }
    return FormatDateStrings.inSomeDays(days)
  }
  if (seconds < month) {
    const weeks = Math.floor(seconds / week)
    if (weeks === 1) {
      return FormatDateStrings.inOneWeek()
    }
    return FormatDateStrings.inSomeWeeks(weeks)
  }
  if (seconds < year) {
    const months = Math.floor(seconds / month)
    if (months === 1) {
      return FormatDateStrings.inOneMonth()
    }
    return FormatDateStrings.inSomeMonths(months)
  }
  const years = Math.floor(seconds / year)
  if (years === 1) {
    return FormatDateStrings.inOneYear()
  }
  return FormatDateStrings.inSomeYears(years)
}
