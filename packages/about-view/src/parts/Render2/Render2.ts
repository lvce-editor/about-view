import { ViewletCommand } from '@lvce-editor/constants'
import * as AboutStates from '../AboutStates/AboutStates.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff from '../Diff/Diff.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const doRender = async (uid: number, _diffResult: readonly number[]): Promise<readonly any[]> => {
  const { oldState, scheduledState } = AboutStates.get(uid)
  // State may change between the diff2 and render2 RPCs.
  const diffResult = Diff.diff(oldState, scheduledState)
  AboutStates.set(uid, scheduledState, scheduledState)
  const commands = ApplyRender.applyRender(oldState, scheduledState, diffResult)
  if (!RendererProcess.isConnected()) {
    return commands
  }
  const rendererWorkerCommands = commands.filter((command) => command[0] === ViewletCommand.SetFocusContext)
  const rendererProcessCommands = commands
    .filter((command) => command[0] !== ViewletCommand.SetFocusContext)
    .flatMap((command) => (command[0] === ViewletCommand.SetDom2 ? [command, ['Viewlet.setUid', uid, uid]] : [command]))
  const transactionId = await RendererProcess.invoke('Viewlet.queueCommands', uid, rendererProcessCommands)
  return [...rendererWorkerCommands, ['Viewlet.commitPending', uid, transactionId]]
}
