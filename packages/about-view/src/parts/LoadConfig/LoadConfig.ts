import type { AboutState } from '../AboutState/AboutState.ts'

interface Config {
  readonly version: string
  readonly commit: string
  readonly date: string
}

export const loadConfig = async (state: AboutState): Promise<Config> => {
  // TODO
  return {
    version: '',
    commit: '',
    date: '',
  }
}
