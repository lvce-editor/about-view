import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.repeated-show-single-dialog'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  try {
    await About.show()
    await About.show()
    await expect(dialogContent).toHaveCount(1)
    await expect(dialogContent).toBeVisible()
  } finally {
    await closeAbout(aboutApi)
  }
}
