import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.content-layout'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const content = dialogContent.locator('.DialogContentRight')

  try {
    await expect(content).toHaveCSS('display', 'flex')
    await expect(content).toHaveCSS('flex-direction', 'column')
    await expect(content).toHaveCSS('flex-grow', '1')
  } finally {
    await closeAbout(aboutApi)
  }
}
