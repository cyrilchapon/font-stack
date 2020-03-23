# font-stack

![build status](https://img.shields.io/travis/cyrilchapon/font-stack?style=flat-square&logo=travis) ![code style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square&logo=javascript) ![libraries status](https://img.shields.io/librariesio/release/npm/font-stack?style=flat-square&logo=npm)

## Install
```bash
yarn add font-stack

// or

npm install --save font-stack
```

## Usage

```js
import { composeStack, FONT_STACKS } from 'font-stack'

const fontStack = composeStack([
  'Source Sans Pro',
  ...FONT_STACKS['Arial']
])

console.log(fontStack)

// 'Source Sans Pro', Arial, 'Helvetica Neue', Helvetica, sans-serif

```

## API

### `composeStack(families)`
_Escapes and assemble a font-stack represented in an Array._

- `returns` [**string**]: output escaped font stack string
- `families` [**array<string>**]: input font-stack families array

(see [escape rules](#_escapefamilyfamily))

### `FONT_STACKS`
_Common font stacks databases_

- `[key]` [**array<string>**]: font-stack families array

(see [src/font-stack-database.js](./src/font-stack-database.js))

### `_escapeFamily(family)`
_Escapes a single family_

- `returns` [**string**]: output escaped family string
- `family` [**string**]: input family string

### `_isUnsafe(family)`
_Tests if a single family should be escaped_

- `returns` [**bool**]: wether the family should be escaped (contains `' '`)
- `family` [**string**]: input family string
