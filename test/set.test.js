var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('set', function(done) {
    pool({
      collection: 'mine',
      doc: {title: 'mine item'},
      action: 'set'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

});
