module.exports = function(db, cb) {
  var col = db.collection(message.collection);
  col.drop(function(err, results) {
    cb(err, results);
  });
};
