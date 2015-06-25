var assert = require("assert");
var push = require('../api/push');

describe('remo lib', function(){

  it('push', function(done) {
    push({}, function(err, rsp){
      assert.equal(null, err);
      assert.ok(rsp);
      done();
    });
  });
});
