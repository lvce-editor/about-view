import type { Test } from '@lvce-editor/test-with-playwright'
import { getHeading, getMessage } from './_about.js'

export const name = 'about.text-selection'

export const test: Test = async ({ About, expect, Locator }) => {
  await About.show()
  const dialogContent = Locator('.DialogContent').first()

  try {
    await expect(getHeading(dialogContent)).toHaveCSS('user-select', 'text')
    await expect(getMessage(dialogContent)).toHaveCSS('user-select', 'text')
  } finally {
    await About.handleClickClose()
  }
}
