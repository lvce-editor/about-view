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
