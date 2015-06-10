module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.count(message.query,
    function(err, results) {
      cb(err, results);
    }
  );
};
