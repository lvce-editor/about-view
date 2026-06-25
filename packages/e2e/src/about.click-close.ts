import type { Test } from '@lvce-editor/test-with-playwright'
import { openAbout } from './_about.js'

export const name = 'about.click-close'

export const test: Test = async (api) => {
  const { About, expect } = api

  // arrange
  const dialogContent = await openAbout(api)

  // act
  await About.handleClickClose()

  // assert
  await expect(dialogContent).toBeHidden()
}
