module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.drop(function(err, results) {
    cb(err, results);
  });
};
