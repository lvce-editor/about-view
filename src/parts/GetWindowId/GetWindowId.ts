import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const getWindowId = async () => {
  return ParentRpc.invoke('GetWindowId.getWindowId')
}
