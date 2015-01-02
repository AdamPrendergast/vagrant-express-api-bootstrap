var calculator = require("../app/modules/calculator-module.js");
var assert = require("assert")

describe("Calculator Module", function() {
	describe("Add", function(argument) {
		it('should return 2 when adding 1 and 1', function(){
      assert.equal(2, calculator.add(1, 1));
    });
    it('should return 4 when adding 2 and 2', function(){
      assert.equal(4, calculator.add(2, 2));
    });
    it('should return 2 when passes 1 and 1 as string values', function(){
      assert.equal(2, calculator.add('1', '1'));
    });
	});
});
