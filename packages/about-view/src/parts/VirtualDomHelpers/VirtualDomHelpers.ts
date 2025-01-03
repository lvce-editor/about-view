import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const text = (data: string): VirtualDomNode => {
  return {
    type: VirtualDomElements.Text,
    text: data,
    childCount: 0,
  }
}
