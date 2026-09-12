import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, getOkButton, openAbout } from './_about.js'

export const name = 'about.button-semantics'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const okButton = getOkButton(dialogContent)
  const copyButton = getCopyButton(dialogContent)

  try {
    const buttons = dialogContent.locator('.Button')
    await expect(buttons).toHaveCount(2)
    await expect(okButton).toHaveClass('Button')
    await expect(okButton).toHaveClass('ButtonSecondary')
    await expect(okButton).toHaveAttribute('name', 'Ok')
    await expect(okButton).toHaveText('Ok')
    await expect(copyButton).toHaveClass('Button')
    await expect(copyButton).toHaveClass('ButtonPrimary')
    await expect(copyButton).toHaveAttribute('name', 'Copy')
    await expect(copyButton).toHaveText('Copy')
  } finally {
    await closeAbout(aboutApi)
  }
}
