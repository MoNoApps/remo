var update = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.update(message.query, message.doc, message.concern,
    function(err, results) {
      cb(err, results);
    }
  );
};

module.exports = update;
