var assert = require("assert");
var push = require('../api/push');
var pool = require('../api/pool');

describe('remo lib', function(){

  it('push', function(done) {
    push({}, function(err, rsp){
      assert.equal(null, err);
      assert.ok(rsp);
      done();
    });
  });

  it('fill', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1, module: 'send'},
      action: 'find'
    }, function(err, res){
      assert.ok(res);
      assert.ok(res[0]._id);

      assert.equal('send', res[0].module);
      assert.equal(0, res[0].version);
      assert.equal(null, err);

      done();
    });
  });

});
