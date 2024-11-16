import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import * as CommandMap from '../CommandMap/CommandMap.ts'

export const listen = async (): Promise<void> => {
  WebWorkerRpcClient.create({
    commandMap: CommandMap.commandMap,
  })
}
