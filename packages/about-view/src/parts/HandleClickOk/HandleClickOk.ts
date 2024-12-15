import type { AboutState } from '../AboutState/AboutState.ts'
import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const handleClickOk = async (state: AboutState): Promise<AboutState> => {
  await ParentRpc.invoke('Viewlet.closeWidget', 'About')
  return state
}
