var parseOId = require('../api/parseOId');

module.exports = function(db, message, cb) {
  message.query[message.index] = parseOId(message.query[message.index]);
  db.collection(message.collection)
  .remove(message.query,
    function(err, results) {
      cb(err, results);
    }
  );
};
