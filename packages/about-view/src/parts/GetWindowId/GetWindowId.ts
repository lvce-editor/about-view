import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const getWindowId = async (): Promise<number> => {
  return RendererWorker.invoke('GetWindowId.getWindowId')
}
