import { describe, it } from 'mocha'
import { assert } from 'chai'

import { _escapeFamily } from '../src'

/* eslint-disable quote-props */
const testCases = {
  'SingleWord': 'SingleWord',
  'singleWord': 'singleWord',
  'snake_case': 'snake_case',
  'kebab-case': 'kebab-case',
  'Multi Words': "'Multi Words'",
  ' Dirty multi words \'': "'Dirty multi words'",
  '" Dirty multi words ': "'Dirty multi words'"
}

describe('_escapeFamily(family) function', () => {
  Object
    .entries(testCases)
    .forEach(([initial, expected]) => {
      it(`${initial} => ${expected}`, () => {
        const actual = _escapeFamily(initial)
        assert.strictEqual(actual, expected)
      })
    })
})
