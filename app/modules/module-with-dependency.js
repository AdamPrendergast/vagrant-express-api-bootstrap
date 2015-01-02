var dependency = require('../external/some-dependency');

module.exports = {

  get: function() {
  	return dependency.get();
  }
     
};