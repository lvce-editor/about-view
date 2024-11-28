import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const getWindowId = async (): Promise<number> => {
  return ParentRpc.invoke('GetWindowId.getWindowId')
}
