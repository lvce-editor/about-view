import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetAboutContentVirtualDom from '../GetAboutContentVirtualDom/GetAboutContentVirtualDom.ts'
import * as GetDialogVirtualDom from '../GetDialogVirtualDom/GetDialogVirtualDom.js'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getAboutVirtualDom = (productName, lines, closeMessage, okMessage, copyMessage, infoMessage) => {
  const content = GetAboutContentVirtualDom.getAboutContentVirtualDom(lines)
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet About',
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      childCount: 1,
    },
    ...GetDialogVirtualDom.getDialogVirtualDom(content, closeMessage, infoMessage, okMessage, copyMessage, productName),
  ]
}
