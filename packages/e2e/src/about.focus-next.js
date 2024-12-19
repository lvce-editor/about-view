export const name = 'about.click-close'

export const test = async ({ Locator, expect, Command }) => {
  // arrange
  // TODO use PageObject
  await Command.execute('About.showAbout')
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()

  // act
  // TODO use PageObject
  await Command.execute('About.focusNext')

  // assert
  const okButton = dialogContent.locator('.ButtonSecondary')
  const copyButton = dialogContent.locator('.ButtonPrimary')
  await expect(copyButton).toBeFocused()

  // act
  await Command.execute('About.focusNext')
  await expect(okButton).toBeFocused()
}
