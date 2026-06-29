import type { AboutState } from '../AboutState/AboutState.ts'

interface Config {
  readonly commit: string
  readonly date: string
  readonly version: string
}

export const loadConfig = async (state: AboutState): Promise<Config> => {
  // TODO
  return {
    commit: '',
    date: '',
    version: '',
  }
}
