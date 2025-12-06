import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'about.click-close'

export const test: Test = async ({ About, expect, Locator }) => {
  // arrange
  await About.show()
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()

  // act
  await About.handleClickClose()

  // assert
  await expect(dialogContent).toBeHidden()
}
