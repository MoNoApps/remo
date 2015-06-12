module.exports = function(db, message, cb) {
  db.collection(message.collection)
  .createIndex(message.query,
    function(err, results) {
      cb(err, results);
    }
  );
};
