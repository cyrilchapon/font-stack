import { trim } from 'lodash'
import * as FONT_STACKS from './font-stack-database'

const DEFAULT_ESCAPE_CHAR = '\''
const DEFAULT_DIRTY_CHARS = '\'" '
const DEFAULT_UNSAFE_CHAR = ' '

const _isUnsafe = family => family.includes(DEFAULT_UNSAFE_CHAR)

const _surroundBy = char => family => (
  `${char}${family}${char}`
)

const _escape = char => family => {
  // Just keep the clean word
  const cleanFamily = trim(family, DEFAULT_DIRTY_CHARS)

  return _isUnsafe(cleanFamily)
    ? _surroundBy(char)(cleanFamily)
    : cleanFamily
}

const escape = _escape(DEFAULT_ESCAPE_CHAR)

const composeStack = families => (
  families
    .map(escape)
    .join(', ')
)

export {
  escape as _escapeFamily,
  _isUnsafe as _familyIsUnsafe,
  composeStack,
  FONT_STACKS
}

export default {
  _escapeFamily: escape,
  _familyIsUnsafe: _isUnsafe,
  composeStack,
  FONT_STACKS
}
