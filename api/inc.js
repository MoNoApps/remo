var update = require('./update');

var inc = function(db, message, cb) {
  message.doc = {$inc: message.inc};
  update(db, message, cb);
};

module.exports = inc;
