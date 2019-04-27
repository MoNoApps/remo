(function () {

var remo = require('../index');
var conf = require('../config.json');

function pool (message, cb) {
  message = remo.merge(conf.defaults, message);
  remo.connect(message, onConnect);

  function onAttempt (err, res) {
    cb(err, res);
  }

  function onConnect (err, db) {
    conf.defaults.db = conf.defaults.db || db;
    remo.attempt(db, remo.merge(conf.defaults, message), onAttempt);
  }
}

module.exports = pool;

})();
