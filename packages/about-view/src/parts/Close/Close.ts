import * as CloseWidget from '../CloseWidget/CloseWidget.ts'

export const close = async (): Promise<void> => {
  await CloseWidget.closeWidget('About')
}
