import { LazyTransferMessagePortRpcParent } from '@lvce-editor/rpc'
import { FileSystemWorker, RendererWorker } from '@lvce-editor/rpc-registry'

const send = async (port: MessagePort): Promise<void> => {
  await RendererWorker.sendMessagePortToFileSystemWorker(port, 0)
}

export const initializeRendererWorker = async (): Promise<void> => {
  const rpc = await LazyTransferMessagePortRpcParent.create({
    commandMap: {},
    send,
  })
  FileSystemWorker.set(rpc)
}
