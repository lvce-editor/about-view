import { beforeAll, expect, test } from '@jest/globals'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as CommandMap from '../src/parts/CommandMap/CommandMap.ts'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

beforeAll(() => {
  AboutStates.registerCommands(CommandMap.commandMap)
})

test('excludes top-level commands', () => {
  const commandIds = GetCommandIds.getCommandIds()

  expect(commandIds).toContain('handleClickClose')
  expect(commandIds).not.toContain('showAbout')
  expect(commandIds).not.toContain('showAboutElectron')
})
