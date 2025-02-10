import * as ParentRpc from '../ParentRpc/ParentRpc.js'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showAboutDefault = async (): Promise<void> => {
  await ParentRpc.invoke('Viewlet.openWidget', ViewletModuleId.About)
}
