import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { AboutState } from '../AboutState/AboutState.ts'
import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as LoadConfig from '../LoadConfig/LoadConfig.ts'

interface AboutContent {
  readonly lines: readonly string[]
  readonly productName: string
}

const getContent = async (): Promise<AboutContent> => {
  const config = await LoadConfig.loadConfig()
  return { lines: GetAboutDetailStringWeb.getDetailStringWeb(config), productName: config.productName }
}

export const loadContent2 = async (context: AsyncCommandContext<AboutState>, content?: AboutContent): Promise<void> => {
  const resolvedContent = content || (await getContent())
  await context.updateState((state) => ({
    ...state,
    focusId: AboutFocusId.Ok,
    lines: resolvedContent.lines,
    productName: resolvedContent.productName,
  }))
}
