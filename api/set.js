var update = require('./update');

var set = function(db, message, cb) {
  message.doc = {$set: message.doc};
  update(db, message, cb);
};

module.exports = set;
