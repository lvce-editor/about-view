import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.dialog-structure'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const aboutView = Locator('.Viewlet.About')

  try {
    await expect(aboutView).toHaveCount(1)
    await expect(dialogContent).toHaveCount(1)
    const toolbarRow = dialogContent.locator('.DialogToolBarRow')
    await expect(toolbarRow).toHaveCount(1)
    const messageRow = dialogContent.locator('.DialogMessageRow')
    await expect(messageRow).toHaveCount(1)
    const contentRight = dialogContent.locator('.DialogContentRight')
    await expect(contentRight).toHaveCount(1)
    const heading = dialogContent.locator('.DialogHeading')
    await expect(heading).toHaveCount(1)
    const message = dialogContent.locator('.DialogMessage')
    await expect(message).toHaveCount(1)
    const buttonsRow = dialogContent.locator('.DialogButtonsRow')
    await expect(buttonsRow).toHaveCount(1)
  } finally {
    await closeAbout(aboutApi)
  }
}
