import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockGetWindowId: any = jest.fn()
const mockGetDetailString: any = jest.fn()
const mockGetProductNameLong: any = jest.fn()
const mockShowMessageBox: any = jest.fn()
const mockWriteText: any = jest.fn()

jest.unstable_mockModule('../src/parts/GetWindowId/GetWindowId.ts', () => ({
  getWindowId: mockGetWindowId,
}))

jest.unstable_mockModule('../src/parts/GetAboutDetailString/GetAboutDetailString.ts', () => ({
  getDetailString: mockGetDetailString,
}))

jest.unstable_mockModule('../src/parts/Product/Product.ts', () => ({
  getProductNameLong: mockGetProductNameLong,
}))

jest.unstable_mockModule('../src/parts/ElectronDialog/ElectronDialog.ts', () => ({
  showMessageBox: mockShowMessageBox,
}))

jest.unstable_mockModule('../src/parts/ClipBoard/ClipBoard.ts', () => ({
  writeText: mockWriteText,
}))

const ShowAboutElectron = await import('../src/parts/ShowAboutElectron/ShowAboutElectron.ts')

test('showAboutElectron - clicks ok button', async () => {
  mockGetWindowId.mockResolvedValue(1)
  mockGetDetailString.mockResolvedValue('test detail')
  mockGetProductNameLong.mockResolvedValue('Test Editor')
  mockShowMessageBox.mockResolvedValue(1)

  await ShowAboutElectron.showAboutElectron()

  expect(mockShowMessageBox).toHaveBeenCalledWith({
    windowId: 1,
    message: 'Test Editor',
    buttons: ['Copy', 'Ok'],
    type: 'info',
    detail: 'test detail',
  })
  expect(mockWriteText).not.toHaveBeenCalled()
})

test('showAboutElectron - clicks copy button', async () => {
  mockGetWindowId.mockResolvedValue(1)
  mockGetDetailString.mockResolvedValue('test detail')
  mockGetProductNameLong.mockResolvedValue('Test Editor')
  mockShowMessageBox.mockResolvedValue(0)

  await ShowAboutElectron.showAboutElectron()

  expect(mockShowMessageBox).toHaveBeenCalledWith({
    windowId: 1,
    message: 'Test Editor',
    buttons: ['Copy', 'Ok'],
    type: 'info',
    detail: 'test detail',
  })
  expect(mockWriteText).toHaveBeenCalledWith('test detail')
})
