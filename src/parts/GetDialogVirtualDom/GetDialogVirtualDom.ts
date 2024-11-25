import * as AriaBoolean from '../AriaBoolean/AriaBoolean.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetButtonVirtualDom from '../GetButtonVirtualDom/GetButtonVirtualDom.ts'
import * as Ids from '../Ids/Ids.ts'
import * as InputName from '../InputName/InputName.ts'
import * as JoinBySpace from '../JoinBySpace/JoinBySpace.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as TabIndex from '../TabIndex/TabIndex.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getDialogVirtualDom = (
  content: readonly VirtualDomNode[],
  closeMessage: string,
  infoMessage: string,
  okMessage: string,
  copyMessage: string,
  productName: string,
): readonly VirtualDomNode[] => {
  const dom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogContent,
      tabIndex: TabIndex.Focusable,
      role: AriaRoles.Dialog,
      ariaModal: AriaBoolean.True,
      ariaLabelledBy: JoinBySpace.joinBySpace(Ids.DialogIcon, Ids.DialogHeading),
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
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, ClassNames.MaskIconClose),
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogMessageRow,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DialogIcon, ClassNames.DialogInfoIcon, ClassNames.MaskIcon, ClassNames.MaskIconInfo),
      id: Ids.DialogIcon,
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
      id: Ids.DialogHeading,
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
    ...GetButtonVirtualDom.getSecondaryButtonVirtualDom(okMessage, DomEventListenerFunctions.HandleClickOk, InputName.Ok),
    ...GetButtonVirtualDom.getPrimaryButtonVirtualDom(copyMessage, DomEventListenerFunctions.HandleClickCopy, InputName.Copy),
  ]
  return dom
}
