export const name = 'about.click-close'

/**
 *
 * @param {import('@lvce-editor/test-with-playwright').Test} param0
 */
export const test = async ({ Locator, expect, About }) => {
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
