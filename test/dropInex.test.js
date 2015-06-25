var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('dropIndex', function(done) {
    pool({
      collection: 'mine',
      query: {'date': 1},
      action: 'dropIndex'
    }, function(err, res){
      //assert.equal(null, err);
      assert.equal(null, res);

      done();
    });
  });

  it('dropIndex warn', function(done) {
    pool({
      collection: 'mine',
      doc: {'veloz': -1},
      action: 'dropIndex'
    }, function(err, res){
      assert.ok(err);
      assert.equal(null, res);

      done();
    });
  });

});
