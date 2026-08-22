import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.message-row-layout'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const messageRow = dialogContent.locator('.DialogMessageRow')

  try {
    await expect(messageRow).toHaveCSS('display', 'flex')
    await expect(messageRow).toHaveCSS('gap', '24px')
    await expect(messageRow).toHaveCSS('flex-grow', '1')
    await expect(messageRow).toHaveCSS('padding-left', '10px')
    await expect(messageRow).toHaveCSS('padding-right', '10px')
  } finally {
    await closeAbout(aboutApi)
  }
}
