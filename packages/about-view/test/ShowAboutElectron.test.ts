import { expect, test, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetAboutDetailString from '../src/parts/GetAboutDetailString/GetAboutDetailString.ts'
import * as ShowAboutElectron from '../src/parts/ShowAboutElectron/ShowAboutElectron.ts'

// Ok button

test('showAboutElectron - clicks ok button', async () => {
  const showMessageBoxCalls: any[] = []
  const writeTextMock = jest.fn()
  const mockInvoke = jest.fn((method: string, ...args: any[]) => {
    switch (method) {
      case 'GetWindowId.getWindowId':
        return 1
      case 'GetAboutDetailString.getDetailString':
        return GetAboutDetailString.getDetailString()
      case 'ElectronDialog.showMessageBox':
        showMessageBoxCalls.push(args[0])
        return 1
      case 'ClipBoard.writeText':
        writeTextMock(args[0])
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
  })

  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
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
  expect(writeTextMock).not.toHaveBeenCalled()
})

// Copy button

test('showAboutElectron - clicks copy button', async () => {
  const showMessageBoxCalls: any[] = []
  const writeTextMock = jest.fn()
  const mockInvoke = jest.fn((method: string, ...args: any[]) => {
    switch (method) {
      case 'GetWindowId.getWindowId':
        return 1
      case 'GetAboutDetailString.getDetailString':
        return GetAboutDetailString.getDetailString()
      case 'ElectronDialog.showMessageBox':
        showMessageBoxCalls.push(args[0])
        return 0
      case 'ClipBoard.writeText':
        writeTextMock(args[0])
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
  })

  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
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
  expect(writeTextMock).toHaveBeenCalledWith(detail)
})
