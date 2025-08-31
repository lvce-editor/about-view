import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'about.click-copy'

export const test: Test = async ({ Locator, expect, About, ClipBoard }) => {
  // arrange
  await About.show()
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()
  await ClipBoard.enableMemoryClipBoard()

  // act
  await About.handleClickCopy()

  // assert
  // await ClipBoard.shouldHaveText('abc')
  // await expect(dialogContent).toBeHidden()
}
