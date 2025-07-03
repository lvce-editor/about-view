import { beforeEach, expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetAboutDetailString from '../src/parts/GetAboutDetailString/GetAboutDetailString.ts'

let showMessageBoxCalls: any[] = []
let writeTextCalls: any[] = []

beforeEach(() => {
  showMessageBoxCalls = []
  writeTextCalls = []
})

const ShowAboutElectron = await import('../src/parts/ShowAboutElectron/ShowAboutElectron.ts')

// Ok button

test('showAboutElectron - clicks ok button', async () => {
  const createMockRpc = (showMessageBoxResult: number): any => {
    return MockRpc.create({
      commandMap: {},
      invoke: (method: string, ...args: any[]) => {
        switch (method) {
          case 'GetWindowId.getWindowId':
            return 1
          case 'GetAboutDetailString.getDetailString':
            // Use the real implementation for detail string
            return GetAboutDetailString.getDetailString()
          case 'ElectronDialog.showMessageBox':
            showMessageBoxCalls.push(args[0])
            return showMessageBoxResult
          case 'ClipBoard.writeText':
            writeTextCalls.push(args[0])
            return undefined
          case 'Process.getElectronVersion':
          case 'Process.getNodeVersion':
          case 'Process.getChromeVersion':
          case 'Process.getV8Version':
            return 'x'
          case 'Process.getVersion':
            return '0.0.0-dev'
          case 'Process.getCommit':
            return 'unknown commit'
          case 'Process.getDate':
            return 'unknown'
          default:
            throw new Error(`unexpected method: ${method}`)
        }
      },
    })
  }
  const mockRpc = createMockRpc(1)
  RendererWorker.set(mockRpc)

  const detail = await GetAboutDetailString.getDetailString()

  await ShowAboutElectron.showAboutElectron()

  expect(showMessageBoxCalls).toEqual([
    {
      windowId: 1,
      message: 'Lvce Editor - OSS',
      productName: 'Lvce Editor - OSS',
      buttons: ['Copy', 'Ok'],
      type: 'info',
      detail,
    },
  ])
  expect(writeTextCalls).toEqual([])
})

// Copy button

test('showAboutElectron - clicks copy button', async () => {
  const createMockRpc = (showMessageBoxResult: number): any => {
    return MockRpc.create({
      commandMap: {},
      invoke: (method: string, ...args: any[]) => {
        switch (method) {
          case 'GetWindowId.getWindowId':
            return 1
          case 'GetAboutDetailString.getDetailString':
            // Use the real implementation for detail string
            return GetAboutDetailString.getDetailString()
          case 'ElectronDialog.showMessageBox':
            showMessageBoxCalls.push(args[0])
            return showMessageBoxResult
          case 'ClipBoard.writeText':
            writeTextCalls.push(args[0])
            return undefined
          case 'Process.getElectronVersion':
          case 'Process.getNodeVersion':
          case 'Process.getChromeVersion':
          case 'Process.getV8Version':
            return 'x'
          case 'Process.getVersion':
            return '0.0.0-dev'
          case 'Process.getCommit':
            return 'unknown commit'
          case 'Process.getDate':
            return 'unknown'
          default:
            throw new Error(`unexpected method: ${method}`)
        }
      },
    })
  }
  const mockRpc = createMockRpc(0)
  RendererWorker.set(mockRpc)

  const detail = await GetAboutDetailString.getDetailString()

  await ShowAboutElectron.showAboutElectron()

  expect(showMessageBoxCalls).toEqual([
    {
      windowId: 1,
      message: 'Lvce Editor - OSS',
      productName: 'Lvce Editor - OSS',
      buttons: ['Copy', 'Ok'],
      type: 'info',
      detail,
    },
  ])
  expect(writeTextCalls).toEqual([detail])
})
