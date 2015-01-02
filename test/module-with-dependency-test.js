var sinon = require('sinon')
  , mockery = require('mockery')
  , should = require('chai').should();

describe("Module with dependency", function() {

  // SETUP

  var dependencyStub, module;

  before(function() {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });

    dependencyStub = {};
    mockery.registerMock('../external/some-dependency', dependencyStub);
    module = require("../app/modules/module-with-dependency");

  });

  after(function(){
    mockery.disable();
  });

  // TESTS

  describe("Get", function(argument) {

    it('should return expected name', function() {
      var expectedName = 'Mocked';
      dependencyStub.get = sinon.stub().returns({ name: expectedName });
      result = module.get().name;
      result.should.equal(expectedName);
    });

  });

});