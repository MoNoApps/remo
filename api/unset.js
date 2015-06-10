var update = require('../api/update');

module.exports = function(db, message, cb) {
  message.doc = {$unset: message.doc};
  update(db, message, cb);
};
