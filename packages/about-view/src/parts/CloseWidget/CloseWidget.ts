import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const closeWidget = async (id: string): Promise<void> => {
  await RendererWorker.invoke('Viewlet.closeWidget', id)
}
