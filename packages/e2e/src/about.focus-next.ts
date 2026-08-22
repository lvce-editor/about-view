import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, openAbout, waitForFocused } from './_about.js'

export const name = 'about.focus-next'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }

  // arrange
  const dialogContent = await openAbout(aboutApi)
  const copyButton = getCopyButton(dialogContent)

  try {
    // act
    await About.focusNext()

    // assert
    await waitForFocused(expect, copyButton)
  } finally {
    await closeAbout(aboutApi)
  }
}
