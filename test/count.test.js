var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('count', function(done) {
    pool({
      collection: 'mine',
      doc: {},
      action: 'count'
    }, function(err, res){
      assert.equal(null, err);
      assert.equal(0, res);

      done();
    });
  });

});
