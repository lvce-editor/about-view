import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'about.click-ok'

export const test: Test = async ({ Locator, expect, About }) => {
  // arrange
  await About.show()
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()

  // act
  await About.handleClickOk()

  // assert
  await expect(dialogContent).toBeHidden()
}
