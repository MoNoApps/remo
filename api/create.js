module.exports = function(db, message, cb) {
  db.createCollection(message.collection,
    function(err, results) {
      cb(err, results);
    }
  );
};
