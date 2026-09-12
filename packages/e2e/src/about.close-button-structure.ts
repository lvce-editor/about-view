import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, openAbout } from './_about.js'

export const name = 'about.close-button-structure'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const closeButton = getCloseButton(dialogContent)

  try {
    await expect(closeButton).toHaveCount(1)
    await expect(closeButton).toBeVisible()
    const closeIcon = closeButton.locator('.MaskIconClose')
    await expect(closeIcon).toHaveCount(1)
  } finally {
    await closeAbout(aboutApi)
  }
}
