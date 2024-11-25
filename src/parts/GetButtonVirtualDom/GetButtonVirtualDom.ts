import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getPrimaryButtonVirtualDom = (message: string, onClick: string, name: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(ClassNames.Button, ClassNames.ButtonPrimary),
      onClick,
      childCount: 1,
      name,
    },
    text(message),
  ]
}

export const getSecondaryButtonVirtualDom = (message: string, onClick: string, name: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(ClassNames.Button, ClassNames.ButtonSecondary),
      onClick,
      childCount: 1,
      name,
    },
    text(message),
  ]
}
