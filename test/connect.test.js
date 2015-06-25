var assert = require("assert");
var connect = require('../api/connect');
var closeDB = require('../api/closeDB');
var conf = require('../conf.json');

describe('remo lib', function(){

  it('connect array param', function(done) {
    connect([], function(err) {
      assert.ok(err);
      done();
    });
  });

  it('connect object param', function(done) {
    connect({}, function(err) {
      assert.ok(err);
      done();
    });
  });

  it('connect boolean param', function(done) {
    connect(false, function(err) {
      assert.ok(err);
      done();
    });
  });

  it('connect boolean param', function(done) {
    connect(true, function(err) {
      assert.ok(err);
      done();
    });
  });

  it('connect fake object', function(done) {
    connect({db: {}}, function(err) {
      assert.equal(false,err);
      done();
    });
  });

});
