import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.toolbar-layout'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const toolbar = dialogContent.locator('.DialogToolBarRow')

  try {
    await expect(toolbar).toHaveCSS('display', 'flex')
    await expect(toolbar).toHaveCSS('height', '26px')
  } finally {
    await closeAbout(aboutApi)
  }
}
