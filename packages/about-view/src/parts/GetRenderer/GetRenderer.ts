import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderDialog from '../RenderDialog/RenderDialog.ts'
import * as RenderFocus from '../RenderFocus/RenderFocus.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderAbout:
      return RenderDialog.renderDialog
    case DiffType.RenderFocus:
      return RenderFocus.renderFocus
    default:
      throw new Error('unknown renderer')
  }
}
