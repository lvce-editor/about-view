import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const version = '0.0.0-dev'

export const commit = 'unknown commit'

export const date = ''

export const getElectronVersion = (): Promise<string> => {
  return ParentRpc.invoke('Process.getElectronVersion')
}

export const getNodeVersion = (): Promise<string> => {
  return ParentRpc.invoke('Process.getNodeVersion')
}

export const getChromeVersion = (): Promise<string> => {
  return ParentRpc.invoke('Process.getChromeVersion')
}

export const getVersion = (): string => {
  return version
}

export const getCommit = (): string => {
  return commit
}

export const getV8Version = (): string => {
  return ''
}

export const getDate = (): string => {
  return date
}

export const productNameLong = 'Lvce Editor - OSS'
