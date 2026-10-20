import type { Test } from '@lvce-editor/test-with-playwright'
import { closeAbout, openAbout } from './_about.js'

export const name = 'about.dialog-screenshot'

export const test: Test = async ({ About, Command, ComponentState, expect, Locator }) => {
  const aboutApi = { About, expect, Locator }
  const dialog = await openAbout(aboutApi)
  try {
    // Freeze release metadata and browser text through the normal load command.
    // This preserves the real dialog renderer, styles, icons and event handlers.
    const component = await ComponentState.getComponent('About')
    await Command.execute('Viewlet.executeViewletCommand', component.uid, 'loadContent2', {
      lines: ['Version: 1.0.0', 'Commit: 0123456789abcdef', 'Date: 2026-01-01', 'Browser: Test Browser'],
      productName: 'Lvce Editor - OSS',
    })
    const message = dialog.locator('.DialogMessage')
    await expect(message).toContainText('Browser: Test Browser')
    const userAgent = navigator.userAgent
    let browser = 'webkit'
    if (userAgent.includes('Firefox/')) {
      browser = 'firefox'
    } else if (userAgent.includes('Chrome/')) {
      browser = 'chromium'
    }
    const platform = navigator.platform.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')
    await expect(dialog).toMatchScreenShot(`about/${platform}/${browser}.png`)
  } finally {
    await closeAbout(aboutApi)
  }
}
