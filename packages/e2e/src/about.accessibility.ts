import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, getHeading, getInfoIcon, openAbout } from './_about.js'

export const name = 'about.accessibility'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  try {
    const closeButton = getCloseButton(dialogContent)
    await expect(getHeading(dialogContent)).toHaveId('DialogHeading')
    await expect(getInfoIcon(dialogContent)).toHaveId('DialogIcon')
    await expect(getInfoIcon(dialogContent)).toHaveAttribute('aria-label', 'Info')
    await expect(closeButton).toHaveAttribute('aria-label', 'Close Dialog')
    const closeButtons = dialogContent.locator('button.DialogClose')
    await expect(closeButtons).toHaveCount(1)
    const closeElementsWithRole = dialogContent.locator('.DialogClose[role]')
    await expect(closeElementsWithRole).toHaveCount(0)
  } finally {
    await closeAbout(aboutApi)
  }
}
