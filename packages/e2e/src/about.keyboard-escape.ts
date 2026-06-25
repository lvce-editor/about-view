import type { Test } from '@lvce-editor/test-with-playwright'
import { openAbout } from './_about.js'

export const name = 'about.keyboard-escape'

export const test: Test = async (api) => {
  const { expect, KeyBoard } = api
  const dialogContent = await openAbout(api)

  await KeyBoard.press('Escape')
  await expect(dialogContent).toBeHidden()
}
