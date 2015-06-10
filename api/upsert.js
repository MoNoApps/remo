var update = require('../api/update');

module.exports = function(db, message, cb) {
  message.options.upsert = true;
  update(db, message, cb);
};
