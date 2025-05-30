import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getSecondaryButtonVirtualDom = (message: string, onClick: number, name: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(ClassNames.Button, ClassNames.ButtonSecondary),
      onClick: DomEventListenerFunctions.HandleClickButton,
      childCount: 1,
      name,
    },
    text(message),
  ]
}
