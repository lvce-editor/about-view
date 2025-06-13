import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const version = '0.0.0-dev'

export const commit = 'unknown commit'

export const date = ''

export const getElectronVersion = (): Promise<string> => {
  return RendererWorker.invoke('Process.getElectronVersion')
}

export const getNodeVersion = (): Promise<string> => {
  return RendererWorker.invoke('Process.getNodeVersion')
}

export const getChromeVersion = (): Promise<string> => {
  return RendererWorker.invoke('Process.getChromeVersion')
}

export const getVersion = (): string => {
  return version
}

export const getCommit = (): string => {
  return commit
}

export const getV8Version = (): Promise<string> => {
  return RendererWorker.invoke('Process.getV8Version')
}

export const getDate = (): string => {
  return date
}

export const productNameLong = 'Lvce Editor - OSS'
