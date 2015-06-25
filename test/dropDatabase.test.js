var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('dropDatabase', function(done) {
    pool({
      collection: 'mine',
      action: 'dropDatabase'
    }, function(err, res){
      assert.equal(null,err);
      assert.ok(res);

      done();
    });
  });

});
