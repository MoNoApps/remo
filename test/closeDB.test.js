var assert = require("assert");
var closeDB = require('../api/closeDB');
var conf = require('../conf.json');

describe('remo lib', function(){

  it('closeDB warn', function(done) {
    closeDB(false, function(err, res){
      assert.ok(err);

      done();
    });
  });

});
