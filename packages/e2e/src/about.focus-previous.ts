import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'about.focus-previous'

export const test: Test = async ({ About, expect, Locator }) => {
  // arrange
  await About.show()
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()

  // act
  await About.focusPrevious()

  // assert
  const okButton = dialogContent.locator('.ButtonSecondary')
  const copyButton = dialogContent.locator('.ButtonPrimary')
  await expect(copyButton).toBeFocused()

  // act
  await About.focusPrevious()
  await expect(okButton).toBeFocused()
}
