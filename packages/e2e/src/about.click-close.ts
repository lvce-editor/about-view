import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'about.click-close'

<<<<<<< HEAD:packages/e2e/src/about.click-close.ts
export const test: Test = async ({ Locator, expect, About }) => {
=======
export const test = async ({ Locator, expect, About }) => {
>>>>>>> origin/main:packages/e2e/src/about.click-close.js
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
