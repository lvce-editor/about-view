import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, openAbout } from './_about.js'

export const name = 'about.close-icon-accessibility'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const closeButton = getCloseButton(dialogContent)

  try {
    await expect(closeButton).toHaveAttribute('aria-label', 'Close Dialog')
    const closeIcon = closeButton.locator('.MaskIconClose')
    await expect(closeIcon).toHaveCount(1)
    const labelledCloseIcons = dialogContent.locator('.MaskIconClose[aria-label]')
    await expect(labelledCloseIcons).toHaveCount(0)
    const closeIconsWithRole = dialogContent.locator('.MaskIconClose[role]')
    await expect(closeIconsWithRole).toHaveCount(0)
  } finally {
    await closeAbout(aboutApi)
  }
}
