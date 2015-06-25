var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('unset', function(done) {
    pool({
      collection: 'mine',
      doc:  {title: 'mine item'},
      action: 'unset'
    }, function(err, res){
      assert.ok(res);
      assert.equal(null, err);
      assert.equal('{"ok":1,"nModified":0,"n":0}', res);

      done();
    });
  });

});
