import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getHeading, getInfoIcon, getMessage, openAbout } from './_about.js'

export const name = 'about.message-row-structure'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const messageRow = dialogContent.locator('.DialogMessageRow')
  const content = messageRow.locator('.DialogContentRight')

  try {
    await expect(messageRow).toHaveCount(1)
    await expect(getInfoIcon(messageRow)).toHaveCount(1)
    await expect(content).toHaveCount(1)
    await expect(getHeading(content)).toHaveCount(1)
    await expect(getMessage(content)).toHaveCount(1)
  } finally {
    await closeAbout(aboutApi)
  }
}
