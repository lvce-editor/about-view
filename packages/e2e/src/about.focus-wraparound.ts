import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, getOkButton, openAbout } from './_about.js'

export const name = 'about.focus-wraparound'

export const test: Test = async (api) => {
  const { About, expect } = api
  const dialogContent = await openAbout(api)
  const okButton = getOkButton(dialogContent)
  const copyButton = getCopyButton(dialogContent)

  try {
    await expect(okButton).toBeFocused()

    await About.focusPrevious()
    await expect(copyButton).toBeFocused()

    await About.focusNext()
    await expect(okButton).toBeFocused()

    await About.focusNext()
    await expect(copyButton).toBeFocused()

    await About.focusPrevious()
    await expect(okButton).toBeFocused()
  } finally {
    await closeAbout(api)
  }
}
