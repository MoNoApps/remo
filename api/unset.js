var update = require('./update');

var unset = function(db, message, cb) {
  message.doc = {$unset: message.doc};
  update(db, message, cb);
};
module.exports = unset;
