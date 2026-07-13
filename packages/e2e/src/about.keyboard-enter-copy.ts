import type { Test } from '@lvce-editor/test-with-playwright'
import { getCopyButton, openAbout, waitForFocused } from './_about.js'

export const name = 'about.keyboard-enter-copy'

export const test: Test = async ({ About, ClipBoard, expect, KeyBoard, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  await ClipBoard.enableMemoryClipBoard()

  try {
    await KeyBoard.press('Tab')
    await waitForFocused(expect, getCopyButton(dialogContent))
    await KeyBoard.press('Enter')
    await ClipBoard.shouldHaveText(/Version: 0\.0\.0-dev\nCommit: unknown commit\nDate: unknown\nBrowser: /)
    await expect(dialogContent).toBeHidden()
  } finally {
    await ClipBoard.disableMemoryClipBoard()
  }
}
