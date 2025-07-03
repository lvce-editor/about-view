import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  getChromeVersion,
  getElectronVersion,
  getNodeVersion,
  getV8Version,
  getWindowId,
  openWidget,
  set,
  setFocus,
  showMessageBox,
  writeClipBoardText,
  closeWidget,
} = RendererWorker
