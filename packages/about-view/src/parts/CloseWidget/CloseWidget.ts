import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const closeWidget = async (id: string): Promise<void> => {
  await ParentRpc.invoke('Viewlet.closeWidget', id)
}
