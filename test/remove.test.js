var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('remove', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1},
      action: 'remove'
    }, function(err, res){
      assert.equal(null, err);
      //assert.equal('{"ok":1,"n":1}', res);

      done();
    });
  });

});
