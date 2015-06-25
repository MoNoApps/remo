var remo = require('../index');
var merge = require('../api/merge');
var conf = require('../conf.json');
var attempt = require('../lib/attempt');
var connect = require('../api/connect');

conf.defaults.db = false;

module.exports = function(message, cb){
  connect(conf.defaults, function(err, db) {
    conf.err = err;
    if(!conf.defaults.db){ conf.defaults.db = db; }
    attempt(db, merge(conf.defaults, message), function(err, res) {
      cb(err, res);
    });
  });
};
