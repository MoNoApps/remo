var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('createIndex', function(done) {
    pool({
      collection: 'mine',
      query: {'date': 1},
      action: 'createIndex'
    }, function(err, res){
      assert.equal(null, err);
      assert.equal('date_1', res);

      done();
    });
  });

  it('createIndex warn', function(done) {
    pool({
      collection: 'mine',
      doc: {'veloz': 1},
      action: 'createIndex'
    }, function(err, res){
      assert.equal(null, err);
      assert.equal('date_1', res);

      done();
    });
  });

});
