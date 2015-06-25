var update = require('../api/update');

module.exports = function(db, message, cb) {
  message.options.multi = true;
  message.options.upsert = false;
  update(db, message, cb);
};
