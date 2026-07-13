import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, openAbout, waitForFocused } from './_about.js'

export const name = 'about.repeated-show-preserves-focus'

export const test: Test = async ({ About, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialogContent = await openAbout(aboutApi)
  const copyButton = getCopyButton(dialogContent)

  try {
    await About.focusNext()
    await waitForFocused(expect, copyButton)
    await About.show()
    await waitForFocused(expect, copyButton)
  } finally {
    await closeAbout(aboutApi)
  }
}
