import { expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('renderFocusContext returns correct array', () => {
  const oldState: AboutState = {
    productName: 'test',
    lines: [],
    focusId: 0,
    uid: 0,
  }
  const newState: AboutState = {
    productName: 'test',
    lines: [],
    focusId: 0,
    uid: 0,
  }

  const result = renderFocusContext(oldState, newState)

  expect(result).toEqual(['Viewlet.setFocusContext', WhenExpression.FocusAbout])
})
