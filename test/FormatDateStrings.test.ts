import { expect, test } from '@jest/globals'
import * as FormatDateStrings from '../src/parts/FormatDateStrings/FormatDateStrings.ts'

test('formatDateStrings - one second ago', () => {
  expect(FormatDateStrings.oneSecondAgo()).toBe('1 second ago')
})

test('formatDate - some seconds ago', () => {
  const seconds = 2
  expect(FormatDateStrings.someSecondsAgo(seconds)).toBe('2 seconds ago')
})

test('formatDate - one minute ago', () => {
  expect(FormatDateStrings.oneMinuteAgo()).toBe('1 minute ago')
})

test('formatDate - some minutes ago', () => {
  const minutes = 2
  expect(FormatDateStrings.someMinutesAgo(minutes)).toBe('2 minutes ago')
})

test('formatDate - one hour ago', () => {
  expect(FormatDateStrings.oneHourAgo()).toBe('1 hour ago')
})

test('formatDate - some hours ago', () => {
  const hours = 2
  expect(FormatDateStrings.someHoursAgo(hours)).toBe('2 hours ago')
})

test('formatDate - one day ago', () => {
  expect(FormatDateStrings.oneDayAgo()).toBe('1 day ago')
})

test('formatDate - some days ago', () => {
  const days = 2
  expect(FormatDateStrings.someDaysAgo(days)).toBe('2 days ago')
})

test('formatDate - one week ago', () => {
  expect(FormatDateStrings.oneWeekAgo()).toBe('1 week ago')
})

test('formatDate - some weeks ago', () => {
  const weeks = 2
  expect(FormatDateStrings.someWeeksAgo(weeks)).toBe('2 weeks ago')
})
