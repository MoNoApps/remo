module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.findOne(message.query, message.project, message.options,
    function(err, results) {
      cb(err, results);
    }
  );
};
