var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('create', function(done) {
    pool({
      collection: 'mine',
      action: 'create'
    }, function(err, res){
      assert.equal(null,err);
      assert.equal('remo.mine',res.s.namespace);

      done();
    });
  });

});
