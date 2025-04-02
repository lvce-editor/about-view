import { jest, test, expect } from '@jest/globals'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('renderFocusContext returns correct array', () => {
  const oldState = {} as any
  const newState = {} as any

  const result = renderFocusContext(oldState, newState)

  expect(result).toEqual(['Viewlet.setFocusContext', WhenExpression.FocusAbout])
})
