import config from '@lvce-editor/eslint-config'

export default [
  ...config,
  {
    ignores: ['packages/about-view/src/aboutWorkerMain.ts'],
  },
]
