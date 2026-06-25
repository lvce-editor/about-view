import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.keyboard-tab'

export const test: Test = async (api) => {
  const { expect, KeyBoard } = api
  const dialogContent = await openAbout(api)

  try {
    await KeyBoard.press('Tab')
    await expect(dialogContent).toBeVisible()
  } finally {
    await closeAbout(api)
  }
}
