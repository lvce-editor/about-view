import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getHeading, getMessage, openAbout } from './_about.js'

export const name = 'about.text-selection'

export const test: Test = async (api) => {
  const dialogContent = await openAbout(api)

  try {
    await api.expect(getHeading(dialogContent)).toHaveCSS('user-select', 'text')
    await api.expect(getMessage(dialogContent)).toHaveCSS('user-select', 'text')
  } finally {
    await closeAbout(api)
  }
}
