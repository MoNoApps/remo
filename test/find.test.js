var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('find', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1, module: 'send'},
      limit: 1,
      sort: {module: 1},
      project: {_id: 1},
      action: 'find'
    }, function(err, res){
      assert.ok(res);
      if(res.lenght){
        assert.ok(res[0]._id);
        assert.equal('send', res[0].module);
        assert.equal(0, res[0].version);
        assert.equal(null, err);
      }

      done();
    });
  });

});
