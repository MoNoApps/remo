var update = require('../api/update');

module.exports = function(db, message, cb) {
  message.options.multi = true;
  update(db, message, cb);
};
