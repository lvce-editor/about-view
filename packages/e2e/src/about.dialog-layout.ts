import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.dialog-layout'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  try {
    await expect(dialogContent).toHaveCSS('display', 'flex')
    await expect(dialogContent).toHaveCSS('flex-direction', 'column')
    await expect(dialogContent).toHaveCSS('width', '520px')
    await expect(dialogContent).toHaveCSS('height', '280px')
    await expect(dialogContent).toHaveCSS('border-radius', '6px')
  } finally {
    await closeAbout(aboutApi)
  }
}
