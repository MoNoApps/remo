var update = require('../api/update');
var parseOId = require('../api/parseOId');

module.exports = function(db, message, cb) {
  message.query[message.index] = parseOId(message.query[message.index]);
  update(db, message, cb);
};
