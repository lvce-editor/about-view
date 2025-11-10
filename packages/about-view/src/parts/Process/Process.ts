import { RendererWorker } from '@lvce-editor/rpc-registry'
import { version } from '../Version/Version.ts'
import { commit } from '../Commit/Commit.ts'
import { commitDate } from '../CommitDate/CommitDate.ts'

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
  return commitDate
}

export const productNameLong = 'Lvce Editor - OSS'
