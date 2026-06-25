import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, getOkButton, openAbout } from './_about.js'

export const name = 'about.reopen'

export const test: Test = async (api) => {
  const { expect } = api
  const firstDialogContent = await openAbout(api)
  await closeAbout(api)
  await expect(firstDialogContent).toBeHidden()

  const secondDialogContent = await openAbout(api)
  try {
    await expect(getOkButton(secondDialogContent)).toBeFocused()
  } finally {
    await closeAbout(api)
  }
}
