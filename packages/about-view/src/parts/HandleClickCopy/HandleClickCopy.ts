import type { AboutState } from '../AboutState/AboutState.ts'
import * as ClipBoard from '../ClipBoard/ClipBoard.ts'
import * as JoinLines from '../JoinLines/JoinLines.ts'

export const handleClickCopy = async (state: AboutState): Promise<AboutState> => {
  const { lines } = state
  const message = JoinLines.joinLines(lines)
  await ClipBoard.writeText(message)
  return state
}
