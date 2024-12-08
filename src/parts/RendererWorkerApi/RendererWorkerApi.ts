export interface RendererWorkerApi {
  readonly 'ClipBoard.writeText': (text: string) => Promise<void>
  readonly 'ElectronDialog.showMessageBox': (options: any) => Promise<any>
  readonly 'GetWindowId.getWindowId': () => Promise<number>
}
