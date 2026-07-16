import type { Test } from '@lvce-editor/test-with-playwright'
import { getHeading, getMessage } from './_about.js'

export const name = 'about.text-selection'

export const test: Test = async ({ About, expect, Locator }) => {
  await About.show()
  const dialogContent = Locator('.DialogContent').first()

  try {
    await expect(getHeading(dialogContent)).toHaveCSS('userSelect', 'text')
    await expect(getMessage(dialogContent)).toHaveCSS('userSelect', 'text')
  } finally {
    await About.handleClickClose()
  }
}
