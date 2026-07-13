import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCloseButton, getInfoIcon, openAbout } from './_about.js'

export const name = 'about.icon-styles'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  try {
    await expect(getInfoIcon(dialogContent)).toHaveClass('DialogIcon DialogInfoIcon MaskIcon MaskIconInfo')
    await expect(getCloseButton(dialogContent).locator('.MaskIconClose')).toHaveClass('MaskIcon MaskIconClose')
  } finally {
    await closeAbout(aboutApi)
  }
}
