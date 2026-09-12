import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.action-button-accessibility'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  try {
    const buttons = dialogContent.locator('button.Button')
    await expect(buttons).toHaveCount(2)
    const okButton = dialogContent.locator('button.ButtonSecondary[name="Ok"]')
    await expect(okButton).toHaveText('Ok')
    const copyButton = dialogContent.locator('button.ButtonPrimary[name="Copy"]')
    await expect(copyButton).toHaveText('Copy')
    const nonButtonElements = dialogContent.locator('.Button:not(button)')
    await expect(nonButtonElements).toHaveCount(0)
  } finally {
    await closeAbout(aboutApi)
  }
}
