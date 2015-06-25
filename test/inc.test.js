var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('inc +1', function(done) {
    pool({
      collection: 'mine',
      doc: { quantity: 1 },
      action: 'inc'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

  it('inc -1', function(done) {
    pool({
      collection: 'mine',
      doc: { quantity: -1 },
      action: 'inc'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

});
