var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('update', function(done) {
    pool({
      collection: 'mine',
      doc: { $set: { updatedAt: new Date().getTime()} },
      action: 'update'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

});
