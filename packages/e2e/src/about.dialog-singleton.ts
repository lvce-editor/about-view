import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.dialog-singleton'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  await openAbout(aboutApi)
  const aboutView = Locator('.Viewlet.About')
  const dialogContent = Locator('.DialogContent')

  try {
    await About.show()

    await expect(aboutView).toHaveCount(1)
    await expect(dialogContent).toHaveCount(1)
  } finally {
    await closeAbout(aboutApi)
  }
}
