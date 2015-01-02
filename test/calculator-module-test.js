var sinon = require('sinon')
  , should = require('chai').should();

describe("Calculator Module", function() {

  var calculator = require("../app/modules/calculator-module.js");

	describe("Add", function(argument) {
		it('should return 2 when adding 1 and 1', function(){
      calculator.add(1, 1).should.equal(2);
    });
    it('should return 4 when adding 2 and 2', function(){
      calculator.add(2, 2).should.equal(4);
    });
    it('should return 2 when passed 1 and 1 as string values', function(){
      calculator.add('1', '1').should.equal(2);
    });
	});
});
