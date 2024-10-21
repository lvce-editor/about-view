import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getPrimaryButtonVirtualDom = (message: string, onClick: string) => {
  return [
    {
      type: VirtualDomElements.Button,
      className: `${ClassNames.Button} ${ClassNames.ButtonPrimary}`,
      onClick,
      childCount: 1,
    },
    text(message),
  ]
}

export const getSecondaryButtonVirtualDom = (message: string, onClick: string) => {
  return [
    {
      type: VirtualDomElements.Button,
      className: `${ClassNames.Button} ${ClassNames.ButtonSecondary}`,
      onClick,
      childCount: 1,
    },
    text(message),
  ]
}
