import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.buttons-row-structure'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const buttonsRow = dialogContent.locator('.DialogButtonsRow')
  const buttons = buttonsRow.locator('button')
  const okButton = buttons.nth(0)
  const copyButton = buttons.nth(1)

  try {
    await expect(buttonsRow).toHaveCount(1)
    await expect(buttons).toHaveCount(2)
    await expect(okButton).toHaveAttribute('name', 'Ok')
    await expect(copyButton).toHaveAttribute('name', 'Copy')
  } finally {
    await closeAbout(aboutApi)
  }
}
