import type { Test } from '@lvce-editor/test-with-playwright'
import { openAbout } from './_about.js'

export const name = 'about.show-once'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  await openAbout(aboutApi)

  try {
    await About.show()

    const dialogContents = Locator('.DialogContent')
    await expect(dialogContents).toHaveCount(1)
    await expect(dialogContents.first()).toBeVisible()
  } finally {
    await About.handleClickClose()
  }
}
