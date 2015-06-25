var assert = require("assert");
var connect = require('../api/connect');
var closeDB = require('../api/closeDB');
var conf = require('../conf.json');

describe('remo lib', function(){

  it('closeDB warn', function(done) {
    closeDB(false, function(err, res){
      assert.ok(err);

      done();
    });
  });

  it('closeDB incorrect', function(done) {
    connect(conf.defaults, function(err, db) {
      closeDB({db: db}, function(err, res){
        assert.ok(err);
        assert.equal(null,res);

        done();
      });
    });
  });

  it('closeDB', function(done) {
    connect(conf.defaults, function(err, db) {
      closeDB(db, function(err, res){
        assert.equal(null,err);
        assert.equal(null,res);

        done();
      });
    });
  });

});
