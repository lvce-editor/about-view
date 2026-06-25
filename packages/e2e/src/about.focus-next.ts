import type { Test, TestApi } from '@lvce-editor/test-with-playwright'

type Expect = TestApi['expect']
type Locator = ReturnType<TestApi['Locator']>

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    const setTimeout = (globalThis as any).setTimeout
    setTimeout(resolve, ms)
  })
}

const waitForFocused = async (expect: Expect, locator: Locator): Promise<void> => {
  let lastError: unknown
  for (let i = 0; i < 20; i++) {
    try {
      await expect(locator).toBeFocused()
      return
    } catch (error) {
      lastError = error
      await wait(50)
    }
  }
  throw lastError
}

export const name = 'about.focus-next'

export const test: Test = async ({ About, expect, Locator }) => {
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
  await waitForFocused(expect, copyButton)
  await wait(50)

  // act
  await About.focusNext()

  // assert
  await waitForFocused(expect, okButton)
}
