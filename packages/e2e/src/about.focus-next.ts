import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, getOkButton, openAbout } from './_about.js'

export const name = 'about.focus-next'

export const test: Test = async (api) => {
  const { About, expect } = api

  // arrange
  const dialogContent = await openAbout(api)
  const okButton = getOkButton(dialogContent)
  const copyButton = getCopyButton(dialogContent)

  try {
    // act
    await About.focusNext()

    // assert
    await expect(copyButton).toBeFocused()

    // act
    await About.focusNext()

    // assert
    await expect(okButton).toBeFocused()
  } finally {
    await closeAbout(api)
  }
}
