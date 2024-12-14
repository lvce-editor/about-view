export const name = 'about.open'

export const test = async ({ Locator, expect, Command }) => {
  await Command.execute('About.showAbout')
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()
}
