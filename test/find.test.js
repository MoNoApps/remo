var assert = require("assert");
var remo = require('../index');
var push = require('../api/push');
var merge = require('../api/merge');
var conf = require('../conf.json');
var attempt = require('../lib/attempt');
var connect = require('../api/connect');

var message = {
  collection: 'mine',
  doc: {version: 1, module: 'send'},
  action: 'find'
};

describe('remo cov', function(){

  it('push', function(done) {
    push(message, function(err, rsp){
      assert.equal(null, err);
      assert.ok(rsp);
      done();
    });
  });

  it('fill', function(done) {
    connect(conf.defaults, function(err, db) {
      attempt(db, merge(conf.defaults, message), function(err, res) {

        assert.ok(res);
        assert.ok(res[0]._id);

        assert.equal('send', res[0].module);
        assert.equal(0, res[0].version);
        assert.equal(null, err);

        done();

      });
    });
  });

});
