var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('drop', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1, module: 'send'},
      action: 'drop'
    }, function(err, res){
      if(err){
        assert.equal(0, err.ok);
        assert.equal(undefined,res);
      }else{
        assert.equal(null, err);
        assert.ok(res);
      }

      done();
    });
  });

});
