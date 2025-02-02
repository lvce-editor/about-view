import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const br: VirtualDomNode = {
  type: VirtualDomElements.Br,
  childCount: 0,
}

export const renderLine = (line: string, index: number): readonly VirtualDomNode[] => {
  if (index === 0) {
    return [text(line)]
  }
  return [br, text(line)]
}
