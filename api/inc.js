var update = require('../api/update');

module.exports = function(db, message, cb) {
  message.doc = {$inc: message.doc};
  update(db, message, cb);
};
