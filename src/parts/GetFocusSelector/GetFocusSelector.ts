import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'

export const getFocusSelector = (focusId: number): string => {
  switch (focusId) {
    case AboutFocusId.Copy:
      return '.ButtonPrimary'
    case AboutFocusId.Ok:
      return '.ButtonSecondary'
    default:
      return ''
  }
}
