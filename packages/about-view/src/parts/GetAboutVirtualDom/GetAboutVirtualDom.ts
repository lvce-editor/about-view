import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetAboutContentVirtualDom from '../GetAboutContentVirtualDom/GetAboutContentVirtualDom.ts'
import * as GetDialogVirtualDom from '../GetDialogVirtualDom/GetDialogVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getAboutVirtualDom = (
  productName: string,
  lines: readonly string[],
  closeMessage: string,
  okMessage: string,
  copyMessage: string,
  infoMessage: string,
): readonly VirtualDomNode[] => {
  const content = GetAboutContentVirtualDom.getAboutContentVirtualDom(lines)
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.About),
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      childCount: 1,
    },
    ...GetDialogVirtualDom.getDialogVirtualDom(content, closeMessage, infoMessage, okMessage, copyMessage, productName),
  ]
}
