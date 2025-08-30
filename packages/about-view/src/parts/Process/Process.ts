import { RendererWorker } from '@lvce-editor/rpc-registry'

export const version = '0.0.0-dev'

export const commit = 'unknown commit'

export const date = ''

export const getElectronVersion = RendererWorker.getElectronVersion

export const getNodeVersion = RendererWorker.getNodeVersion

export const getChromeVersion = RendererWorker.getChromeVersion

export const getVersion = (): string => {
  return version
}

export const getCommit = (): string => {
  return commit
}

export const getV8Version = RendererWorker.getV8Version

export const getDate = (): string => {
  return date
}

export const productNameLong = 'Lvce Editor - OSS'
