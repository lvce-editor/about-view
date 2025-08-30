import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetWindowId from '../GetWindowId/GetWindowId.ts'
import * as Product from '../Product/Product.ts'

export const showMessageBox = async (options: any): Promise<any> => {
  const productName = Product.getProductNameLong()
  const windowId = await GetWindowId.getWindowId()
  const finalOptions = {
    ...options,
    productName,
    windowId,
  }
  return RendererWorker.showMessageBox(finalOptions)
}
