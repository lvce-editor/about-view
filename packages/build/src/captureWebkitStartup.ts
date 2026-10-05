import { readFile, writeFile } from 'node:fs/promises'

const bundle = new URL('../../../node_modules/@lvce-editor/test-with-playwright-worker/dist/workerMain.js', import.meta.url)
const source = await readFile(bundle, 'utf8')
const target = `    await navigateToTest(page, url);
    const testOverlay = page.locator('#TestOverlay');
    await expect(testOverlay).toBeVisible({
      timeout
    });`
if (source.split(target).length !== 2) {
  throw new Error('Expected exactly one browser test navigation in the installed runner')
}
const capture = `    const startupEvents = [];
    const recordStartup = (type, detail) => {
      startupEvents.push({ sequence: startupEvents.length, time: performance.now(), type, detail });
    };
    page.on('pageerror', error => recordStartup('pageerror', { message: error.message, stack: error.stack }));
    page.on('console', message => {
      if (message.type() === 'error') recordStartup('console', message.text());
    });
    page.on('requestfailed', request => recordStartup('requestfailed', { url: request.url(), error: request.failure() }));
    page.on('response', response => {
      if (response.status() >= 400) recordStartup('response', { url: response.url(), status: response.status() });
    });
    const testOverlay = page.locator('#TestOverlay');
    try {
      await navigateToTest(page, url);
      await expect(testOverlay).toBeVisible({ timeout });
    } finally {
      await mkdir('startup-diagnostics', { recursive: true });
      await writeFile('startup-diagnostics/' + basename(test) + '.json', JSON.stringify({ url, startupEvents }, null, 2));
    }`
await writeFile(bundle, source.replace(target, capture))
