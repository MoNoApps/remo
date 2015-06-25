var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('findByObjectId', function(done) {
    pool({
      collection: 'mine',
      action: 'findByObjectId'
    }, function(err, res){
      assert.equal(null, err);
      assert.equal(null, res);
      done();
    });
  });

  it('updateByObjectId', function(done) {
    pool({
      collection: 'mine',
      action: 'updateByObjectId'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

  it('removeByObjectId', function(done) {
    pool({
      collection: 'mine',
      action: 'removeByObjectId'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

});
