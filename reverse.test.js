const reverseString = require('./reverse');
const assert = require('assert')

describe('Tests', function() {
    it('reverseString("Hello") should return "olleH".', function () {
        assert(reverseString("Hello") === "olleH")
      })
})