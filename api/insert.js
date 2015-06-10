module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.insert(message.doc,
    function(err, results) {
      cb(err, results);
    }
  );
};
