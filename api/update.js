module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.update(message.query, message.doc, message.options,
    function(err, results) {
      cb(err, results);
    }
  );
};
