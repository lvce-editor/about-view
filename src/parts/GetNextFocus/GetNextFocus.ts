import * as AboutFocusId from '../AboutFocusId/AboutFocusId.ts'

export const getNextFocus = (focusId: number): number => {
  switch (focusId) {
    case AboutFocusId.Ok:
      return AboutFocusId.Copy
    case AboutFocusId.Copy:
      return AboutFocusId.Ok
    default:
      return AboutFocusId.None
  }
}
