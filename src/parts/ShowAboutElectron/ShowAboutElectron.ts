import * as AboutStrings from '../AboutStrings/AboutStrings.ts'
import * as ClipBoard from '../ClipBoard/ClipBoard.ts'
import * as ElectronDialog from '../ElectronDialog/ElectronDialog.ts'
import * as ElectronMessageBoxType from '../ElectronMessageBoxType/ElectronMessageBoxType.ts'
import * as GetAboutDetailString from '../GetAboutDetailString/GetAboutDetailString.ts'
import * as GetWindowId from '../GetWindowId/GetWindowId.ts'
import * as Product from '../Product/Product.ts'

export const showAboutElectron = async () => {
  const windowId = await GetWindowId.getWindowId()
  const detail = await GetAboutDetailString.getDetailString()
  const productNameLong = await Product.getProductNameLong()
  const options = {
    windowId,
    message: productNameLong,
    buttons: [AboutStrings.copy(), AboutStrings.ok()],
    type: ElectronMessageBoxType.Info,
    detail,
  }
  const index = await ElectronDialog.showMessageBox(options)
  switch (index) {
    case 0:
      await ClipBoard.writeText(detail)
      break
    default:
      break
  }
}
