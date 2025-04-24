import type { AboutState } from '../AboutState/AboutState.ts'
import * as ViewletRegistry from '@lvce-editor/viewlet-registry'

export const { get, set, dispose, getKeys, clear, wrapCommand } = ViewletRegistry.create<AboutState>()
