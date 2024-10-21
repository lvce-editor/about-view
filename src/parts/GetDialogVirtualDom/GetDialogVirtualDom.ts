import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetButtonVirtualDom from '../GetButtonVirtualDom/GetButtonVirtualDom.ts'
import * as TabIndex from '../TabIndex/TabIndex.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getDialogVirtualDom = (
  content: any,
  closeMessage: string,
  infoMessage: string,
  okMessage: string,
  copyMessage: string,
  productName: string
) => {
  const dom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogContent,
      tabIndex: TabIndex.Focusable,
      role: AriaRoles.Dialog,
      ariaModal: 'true',
      ariaLabelledBy: 'DialogIcon DialogHeading',
      onFocusIn: DomEventListenerFunctions.HandleFocusIn,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogToolBarRow,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogClose,
      ariaLabel: closeMessage,
      role: AriaRoles.Button,
      onClick: DomEventListenerFunctions.HandleClickClose,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconClose',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogMessageRow,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      className: 'DialogIcon DialogInfoIcon MaskIcon MaskIconInfo',
      id: 'DialogIcon',
      ariaLabel: infoMessage,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogContentRight,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      id: 'DialogHeading',
      className: ClassNames.DialogHeading,
      childCount: 1,
    },
    text(productName),
    ...content,
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogButtonsRow,
      childCount: 2,
    },
    ...GetButtonVirtualDom.getSecondaryButtonVirtualDom(okMessage, DomEventListenerFunctions.HandleClickOk),
    ...GetButtonVirtualDom.getPrimaryButtonVirtualDom(copyMessage, DomEventListenerFunctions.HandleClickCopy),
  ]
  return dom
}
