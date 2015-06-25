var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('insert', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1, module: 'send'},
      action: 'insert'
    }, function(err, res){
      assert.equal('{"ok":1,"n":1}', res);

      done();
    });
  });

});
