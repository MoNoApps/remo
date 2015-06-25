var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('upsert', function(done) {
    pool({
      collection: 'mine',
      doc: { $set: {module:'send'} },
      action: 'upsert'
    }, function(err, res){
      assert.equal(null, err);
      assert.equal(1, res.result.ok);

      done();
    });
  });

});
