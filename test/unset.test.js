var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('unset', function(done) {
    pool({
      collection: 'mine',
      doc:  {title: 'mine item'},
      action: 'unset'
    }, function(err, res){
      assert.equal(null, err);
      assert.ok(res);
      done();
    });
  });

});
