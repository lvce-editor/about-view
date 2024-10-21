import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const br = {
  type: VirtualDomElements.Br,
  childCount: 0,
}

const renderLine = (line: string, index: number) => {
  if (index === 0) {
    return [text(line)]
  }
  return [br, text(line)]
}

export const getAboutContentVirtualDom = (lines: readonly string[]) => {
  const dom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DialogMessage,
      childCount: lines.length * 2 - 1,
    },
    ...lines.flatMap(renderLine),
  ]
  return dom
}
