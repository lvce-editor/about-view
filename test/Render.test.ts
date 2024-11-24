import { expect, test } from '@jest/globals'
import * as Render from '../src/parts/Render/Render.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'

test('render - no changes', () => {
  const oldState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
  }
  const newState = {
    ...oldState,
  }
  expect(Render.doRender(oldState, newState)).toEqual([])
})

test('render - content changed', () => {
  const oldState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
  }
  const newState = {
    ...oldState,
    lines: ['Version: 2.0.0'],
  }
  expect(Render.doRender(oldState, newState)).toEqual([
    [
      'Viewlet.setDom2',
      expect.arrayContaining([
        expect.objectContaining({
          className: 'Viewlet About',
        }),
      ]),
    ],
  ])
})

test('render - focus changed', () => {
  const oldState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
  }
  const newState = {
    ...oldState,
    focusId: AboutFocusId.Copy,
  }
  expect(Render.doRender(oldState, newState)).toEqual([['setFocused', '.ButtonPrimary']])
})

test('render - both content and focus changed', () => {
  const oldState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
  }
  const newState = {
    productName: 'Test Editor 2',
    lines: ['Version: 2.0.0'],
    focusId: AboutFocusId.Copy,
  }
  expect(Render.doRender(oldState, newState)).toEqual([
    [
      'Viewlet.setDom2',
      expect.arrayContaining([
        expect.objectContaining({
          className: 'Viewlet About',
        }),
      ]),
    ],
    ['setFocused', '.ButtonPrimary'],
  ])
})
