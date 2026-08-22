import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, getOkButton, openAbout, waitForFocused } from './_about.js'

export const name = 'about.focus-wraparound'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const okButton = getOkButton(dialogContent)
  const copyButton = getCopyButton(dialogContent)

  try {
    await waitForFocused(expect, okButton)

    await About.focusPrevious()
    await waitForFocused(expect, copyButton)

    await About.focusNext()
    await waitForFocused(expect, okButton)

    await About.focusNext()
    await waitForFocused(expect, copyButton)

    await About.focusPrevious()
    await waitForFocused(expect, okButton)
  } finally {
    await closeAbout(aboutApi)
  }
}
