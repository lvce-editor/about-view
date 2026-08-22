import type { Test } from '@lvce-editor/test-with-playwright'
import { getOkButton, openAbout, waitForFocused, waitForHidden } from './_about.js'

export const name = 'about.keyboard-space-ok'

export const test: Test = async ({ About, expect, KeyBoard, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)

  await waitForFocused(expect, getOkButton(dialogContent))
  await KeyBoard.press('Space')

  await waitForHidden(expect, dialogContent)
}
