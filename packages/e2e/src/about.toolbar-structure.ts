import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, openAbout } from './_about.js'

export const name = 'about.toolbar-structure'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const toolbar = dialogContent.locator('.DialogToolBarRow')

  try {
    await expect(toolbar).toHaveCount(1)
    await expect(toolbar.locator('.DialogClose')).toHaveCount(1)
    await expect(getCloseButton(dialogContent).locator('.MaskIconClose')).toHaveCount(1)
  } finally {
    await closeAbout(aboutApi)
  }
}
