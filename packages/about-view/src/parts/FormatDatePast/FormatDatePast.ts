// based on https://github.com/microsoft/vscode/blob/bd782eb059e133d3a20fdb446b8feb0010a278ad/src/vs/base/common/date.ts (License MIT)
import * as FormatDateStrings from '../FormatDateStrings/FormatDateStrings.ts'
import * as FormatRelativeDate from '../FormatRelativeDate/FormatRelativeDate.ts'
import { minute, hour, day, week, month, year } from '../TimeUnit/TimeUnit.ts'

const ranges = [
  {
    limit: minute,
    divisor: 1,
    one: FormatDateStrings.oneSecondAgo,
    some: FormatDateStrings.someSecondsAgo,
  },
  {
    limit: hour,
    divisor: minute,
    one: FormatDateStrings.oneMinuteAgo,
    some: FormatDateStrings.someMinutesAgo,
  },
  {
    limit: day,
    divisor: hour,
    one: FormatDateStrings.oneHourAgo,
    some: FormatDateStrings.someHoursAgo,
  },
  {
    limit: week,
    divisor: day,
    one: FormatDateStrings.oneDayAgo,
    some: FormatDateStrings.someDaysAgo,
  },
  {
    limit: month,
    divisor: week,
    one: FormatDateStrings.oneWeekAgo,
    some: FormatDateStrings.someWeeksAgo,
  },
  {
    limit: year,
    divisor: month,
    one: FormatDateStrings.oneMonthAgo,
    some: FormatDateStrings.someMonthsAgo,
  },
  {
    limit: Number.POSITIVE_INFINITY,
    divisor: year,
    one: FormatDateStrings.oneYearAgo,
    some: FormatDateStrings.someYearsAgo,
  },
] as const

export const formatDatePast = (seconds: number): string => {
  return FormatRelativeDate.formatRelativeDate(seconds, ranges)
}
