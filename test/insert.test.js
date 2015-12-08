var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('insert', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1, module: 'send'},
      action: 'insert'
    }, function(err, res){
      assert.equal(res.result.ok, 1);
      assert.equal(res.result.n, 1);

      done();
    });
  });

});
