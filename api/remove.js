module.exports = function(db, message, cb) {
  db.collection(message.collection)
  .remove(message.query,
    function(err, results) {
      cb(err, results);
    }
  );
};
