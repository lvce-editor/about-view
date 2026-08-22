import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.buttons-row-layout'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const buttonsRow = dialogContent.locator('.DialogButtonsRow')

  try {
    await expect(buttonsRow).toHaveCSS('display', 'flex')
    await expect(buttonsRow).toHaveCSS('gap', '8px')
    await expect(buttonsRow).toHaveCSS('padding-top', '20px')
    await expect(buttonsRow).toHaveCSS('padding-right', '10px')
    await expect(buttonsRow).toHaveCSS('padding-bottom', '10px')
    await expect(buttonsRow).toHaveCSS('padding-left', '10px')
  } finally {
    await closeAbout(aboutApi)
  }
}
