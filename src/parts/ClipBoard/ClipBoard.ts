import * as ParentRpc from '../ParentRpc/ParentRpc.js'

export const writeText = async (text: string): Promise<void> => {
  await ParentRpc.invoke('ClipBoard.writeText', /* text */ text)
}
