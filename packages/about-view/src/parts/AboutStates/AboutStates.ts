import type { AboutState } from '../AboutState/AboutState.ts'
import * as ViewletRegistry from '../ViewletRegistry/ViewletRegistry.ts'

export const { get, set, dispose, getKeys } = ViewletRegistry.create<AboutState>()
