import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getCopyButton, getOkButton, openAbout, waitForFocused } from './_about.js'

export const name = 'about.reopen-after-copy'

export const test: Test = async ({ About, ClipBoard, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const firstDialogContent = await openAbout(aboutApi)
  await ClipBoard.enableMemoryClipBoard()

  // eslint-disable-next-line e2e/no-direct-click, @typescript-eslint/no-deprecated -- exercise reopening after the rendered Copy control closes its worker
  await getCopyButton(firstDialogContent).click()
  await expect(firstDialogContent).toBeHidden()

  const secondDialogContent = await openAbout(aboutApi)
  try {
    await waitForFocused(expect, getOkButton(secondDialogContent))
  } finally {
    await closeAbout(aboutApi)
  }
}
