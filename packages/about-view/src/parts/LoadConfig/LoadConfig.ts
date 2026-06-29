import { FileSystemWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../AboutState/AboutState.ts'
import { getConfigJsonPath } from '../GetConfigJsonPath/GetConfigJsonPath.ts'

interface Config {
  readonly commit: string
  readonly date: string
  readonly version: string
}

export const loadConfig = async (state: AboutState): Promise<Config> => {
  const configJsonPath = await getConfigJsonPath()
  const text = await FileSystemWorker.readFile(configJsonPath)
  // TODO handle error
  const data = JSON.parse(text)
  // TODO
  return {
    commit: data.commit,
    date: data.date,
    version: data.version,
  }
}
