# About dialog screenshots

The screenshot test freezes release metadata and browser text through About's normal load command. PNG preserves the CSS mask icons, which DOM-to-SVG conversion currently renders as solid squares.

Baselines are separated by `navigator.platform` and browser because fonts, text rasterization and browser rendering differ. The regular CI matrix compares the matching fixture on each platform; it never updates baselines automatically. Missing or changed screenshots produce `.actual.png` diagnostics, uploaded by CI for review.

To deliberately create or update the fixture on the matching platform, run from the repository root:

```sh
npm run e2e:headless --workspace=packages/e2e -- --filter=about.dialog-screenshot --update-screenshots
npm run e2e:firefox:headless --workspace=packages/e2e -- --filter=about.dialog-screenshot --update-screenshots
npm run e2e:webkit:headless --workspace=packages/e2e -- --filter=about.dialog-screenshot --update-screenshots
```

Review changes to icons, text, spacing, colors and focus outlines before committing, then rerun without the update option. Browser version or font changes can require reviewed baseline updates.
