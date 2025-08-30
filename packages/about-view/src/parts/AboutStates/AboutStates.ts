import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { AboutState } from '../AboutState/AboutState.ts'

export const { get, set, dispose, getKeys, clear, wrapCommand, registerCommands, getCommandIds } = ViewletRegistry.create<AboutState>()
