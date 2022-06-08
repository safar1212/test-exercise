const stringLength = require('./exercise');
const assert = require('assert')

describe('Tests', function () {
    it('stringLength("") should return Error.', function () {
      assert(stringLength("") === Error)
    })
    it('stringLength("abcdcebdleds") should return Error.', function () {
        assert(stringLength("abcdcebdleds") === Error)
    })
    it('stringLength("abcd") should return 4.', function () {
        assert(stringLength("abcd") === 4)
    })
})


