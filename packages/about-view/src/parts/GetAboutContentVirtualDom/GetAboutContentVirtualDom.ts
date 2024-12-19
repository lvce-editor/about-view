import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as RenderLine from '../RenderLine/RenderLine.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'


export const getAboutContentVirtualDom = (lines: readonly string[]): readonly VirtualDomNode[] => {
  const dom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogMessage,
      childCount: lines.length * 2 - 1,
    },
    ...lines.flatMap(RenderLine.renderLine),
  ]
  return dom
}
