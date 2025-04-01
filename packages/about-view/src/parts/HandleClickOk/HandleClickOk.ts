import type { AboutState } from '../AboutState/AboutState.ts'
import * as CloseWidget from '../CloseWidget/CloseWidget.ts'

export const handleClickOk = async (state: AboutState): Promise<AboutState> => {
  await CloseWidget.closeWidget('About')
  return state
}
