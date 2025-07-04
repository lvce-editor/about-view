import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  closeWidget,
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
} = RendererWorker
