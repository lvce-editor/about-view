export const name = 'about.open'

/**
 *
 * @param {import('@lvce-editor/test-with-playwright').Test} param0
 */
export const test = async ({ Locator, expect, About }) => {
  await About.show()
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()
}
