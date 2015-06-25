var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('unknown', function(done) {
    pool({
      collection: 'mine',
      action: 'unknow'
    }, function(err, res){
      assert.equal("Non processable attempt", err);
      assert.equal(null, res);

      done();
    });
  });

});
