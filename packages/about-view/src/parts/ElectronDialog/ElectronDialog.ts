import * as GetWindowId from '../GetWindowId/GetWindowId.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import * as Product from '../Product/Product.ts'

export const showMessageBox = async (options: any): Promise<any> => {
  const productName = Product.getProductNameLong()
  const windowId = await GetWindowId.getWindowId()
  const finalOptions = {
    ...options,
    productName,
    windowId,
  }
  return RendererWorker.invoke('ElectronDialog.showMessageBox', finalOptions)
}
