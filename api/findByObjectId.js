var parseOId = require('../api/parseOId');

module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  message.query[message.index] = parseOId(message.query[message.index]);
  col.findOne(message.query,
    function(err, results) {
      cb(err, results);
    }
  );
};
