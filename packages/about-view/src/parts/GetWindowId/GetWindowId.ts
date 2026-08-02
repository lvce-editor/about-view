import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getWindowId = (): Promise<number> => {
  return RendererWorker.getWindowId()
}
