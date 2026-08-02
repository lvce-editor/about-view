import { RendererWorker } from '@lvce-editor/rpc-registry'

export const closeWidget = (widgetId: string | number): Promise<void> => {
  return RendererWorker.closeWidget(widgetId)
}
