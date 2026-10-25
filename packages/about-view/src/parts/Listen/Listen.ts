import { RendererWorker } from '@lvce-editor/rpc-registry'
import { registerCommands } from '../AboutStates/AboutStates.ts'
import * as CommandMap from '../CommandMap/CommandMap.ts'

export const listen = async (): Promise<void> => {
  registerCommands(CommandMap.commandMap)
  await RendererWorker.initializeRendererWorkerForWorker(CommandMap.commandMap)
  await RendererWorker.initializeFileSystemWorker()
  await RendererWorker.initializeDialogWorker()
}
