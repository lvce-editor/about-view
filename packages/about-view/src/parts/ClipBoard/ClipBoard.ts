import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const writeText = async (text: string): Promise<void> => {
  await RendererWorker.writeClipBoardText(text)
}
