import { expect, jest, test, beforeEach } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/Process/Process.ts', () => {
  return {
    productNameLong: 'Test Editor',
  }
})

jest.unstable_mockModule('../src/parts/GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts', () => {
  return {
    getDetailStringWeb(): readonly string[] {
      return ['Version: 1.0.0', 'Date: today']
    },
  }
})

const LoadContent = await import('../src/parts/LoadContent/LoadContent.ts')
const AboutFocusId = await import('../src/parts/AboutFocusId/AboutFocusId.ts')

test('loadContent - initializes state correctly', () => {
  const state = {
    productName: '',
    lines: [],
    focusId: AboutFocusId.None,
  }
  expect(LoadContent.loadContent(state)).toEqual({
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Date: today'],
    focusId: AboutFocusId.Ok,
  })
})
