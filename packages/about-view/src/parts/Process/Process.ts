import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getElectronVersion = (): Promise<string> => {
  return RendererWorker.getElectronVersion()
}

export const getNodeVersion = (): Promise<string> => {
  return RendererWorker.getNodeVersion()
}

export const getChromeVersion = (): Promise<string> => {
  return RendererWorker.getChromeVersion()
}

export const getV8Version = (): Promise<string> => {
  return RendererWorker.getV8Version()
}
