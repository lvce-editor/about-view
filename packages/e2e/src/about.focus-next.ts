import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'about.focus-next'

export const test: Test = async ({ Locator, expect, About }) => {
  // arrange
  await About.show()
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()

  // act
  await About.focusNext()

  // assert
  const okButton = dialogContent.locator('.ButtonSecondary')
  const copyButton = dialogContent.locator('.ButtonPrimary')
  await expect(copyButton).toBeFocused()

  // act
  await About.focusNext()

  // assert
  await expect(okButton).toBeFocused()
}
