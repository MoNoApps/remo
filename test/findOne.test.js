var assert = require("assert");
var pool = require('../api/pool');

describe('remo lib', function(){

  it('findOne', function(done) {
    pool({
      collection: 'mine',
      doc: {version: 1, module: 'send'},
      action: 'findOne'
    }, function(err, res){ 
      assert.equal(null, err);
      assert.equal(null, res);

      done();
    });
  });

});
