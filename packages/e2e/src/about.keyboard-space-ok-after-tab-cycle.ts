import type { Test } from '@lvce-editor/test-with-playwright'
import { getCopyButton, getOkButton, openAbout, waitForFocused, waitForHidden } from './_about.js'

export const name = 'about.keyboard-space-ok-after-tab-cycle'

export const test: Test = async ({ About, expect, KeyBoard, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  await KeyBoard.press('Tab')
  await waitForFocused(expect, getCopyButton(dialogContent))
  await KeyBoard.press('Tab')
  await waitForFocused(expect, getOkButton(dialogContent))
  await KeyBoard.press('Space')

  await waitForHidden(expect, dialogContent)
}
