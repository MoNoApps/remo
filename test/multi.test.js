var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('multi', function(done) {
    pool({
      collection: 'mine',
      doc: { $set: {module:'send'} },
      action: 'multi'
    }, function(err, res){
      assert.equal(null, err);
      assert.equal(1, res.result.ok);

      done();
    });
  });

  it('multi warn', function(done) {
    pool({
      collection: 'mine',
      doc: {module:'send'},
      action: 'multi'
    }, function(err, res){
      assert.ok(err);
      assert.equal(null, res);

      done();
    });
  });
});
