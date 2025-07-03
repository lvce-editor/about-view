import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showAboutDefault = async (): Promise<void> => {
  await RendererWorker.openWidget(ViewletModuleId.About)
}
