module.exports = function(db, message, cb) {
  db.collection(message.collection)
  .count(message.query,
    function(err, results) {
      cb(err, results);
    }
  );
};
