var should = require('should');
var users = require('../src/users.js');

describe('my first test list', function() {
  it('should get a user w/ right parameters', function(done) {
    // do smth user
    users.get("Robin", function(res) {
      res.should.equal("Robin");
      done();;
    })
  })
  //
  //...
})
