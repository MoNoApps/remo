var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('inc +1', function(done) {
    pool({
      collection: 'mine',
      doc: { quantity: 1 },
      action: 'inc'
    }, function(err, res){
      assert.ok(res);
      assert.equal(null, err);
      assert.equal('{"ok":1,"nModified":0,"n":0}', res);

      done();
    });
  });

  it('inc -1', function(done) {
    pool({
      collection: 'mine',
      doc: { quantity: -1 },
      action: 'inc'
    }, function(err, res){
      assert.ok(res);
      assert.equal(null, err);
      assert.equal('{"ok":1,"nModified":0,"n":0}', res);

      done();
    });
  });

});
