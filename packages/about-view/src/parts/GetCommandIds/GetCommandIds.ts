import * as AboutStates from '../AboutStates/AboutStates.ts'

const topLevelCommandIds = new Set(['showAbout', 'showAboutElectron'])

export const getCommandIds = (): readonly string[] => {
  return AboutStates.getCommandIds().filter((commandId) => !topLevelCommandIds.has(commandId))
}
