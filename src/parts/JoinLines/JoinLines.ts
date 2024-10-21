import * as Character from '../Character/Character.js'

export const joinLines = (lines: readonly string[]) => {
  return lines.join(Character.NewLine)
}
