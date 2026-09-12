import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, openAbout } from './_about.js'

export const name = 'about.toolbar-structure'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const toolbar = dialogContent.locator('.DialogToolBarRow')

  try {
    await expect(toolbar).toHaveCount(1)
    const closeButton = toolbar.locator('.DialogClose')
    await expect(closeButton).toHaveCount(1)
    const closeIcon = getCloseButton(dialogContent).locator('.MaskIconClose')
    await expect(closeIcon).toHaveCount(1)
  } finally {
    await closeAbout(aboutApi)
  }
}
