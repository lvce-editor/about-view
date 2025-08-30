import { RendererWorker } from '@lvce-editor/rpc-registry'

export const version = '0.0.0-dev'

export const commit = 'unknown commit'

export const date = ''

export const { getElectronVersion } = RendererWorker

export const { getNodeVersion } = RendererWorker

export const { getChromeVersion } = RendererWorker

export const getVersion = (): string => {
  return version
}

export const getCommit = (): string => {
  return commit
}

export const { getV8Version } = RendererWorker

export const getDate = (): string => {
  return date
}

export const productNameLong = 'Lvce Editor - OSS'
