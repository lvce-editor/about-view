import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, openAbout } from './_about.js'

export const name = 'about.close-button-layout'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const closeButton = getCloseButton(dialogContent)

  try {
    await expect(closeButton).toHaveCSS('display', 'flex')
    await expect(closeButton).toHaveCSS('position', 'relative')
    await expect(closeButton).toHaveCSS('width', '22px')
    await expect(closeButton).toHaveCSS('height', '22px')
    await expect(closeButton).toHaveCSS('border-radius', '5px')
  } finally {
    await closeAbout(aboutApi)
  }
}
