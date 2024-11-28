import * as GetWindowId from '../GetWindowId/GetWindowId.ts'
import * as Product from '../Product/Product.ts'
import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const showMessageBox = async (options: any) => {
  const productName = await Product.getProductNameLong()
  const windowId = await GetWindowId.getWindowId()
  const finalOptions = {
    ...options,
    productName,
    windowId,
  }
  return ParentRpc.invoke('ElectronDialog.showMessageBox', finalOptions)
}
