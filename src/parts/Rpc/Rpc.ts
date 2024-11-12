import * as IpcState from '../IpcState/IpcState.ts'

export const listen = (ipc: any): void => {
  IpcState.set(ipc)
}
