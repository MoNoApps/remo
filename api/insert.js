module.exports = function(db, message, cb) {
  db.collection(message.collection)
  .insert(message.doc,
    function(err, results) {
      cb(err, results);
    }
  );
};
