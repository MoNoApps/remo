var findOne = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.findOne(message.query, message.project, message.options)
     .toArray(function(err, results) {
       cb(err, results);
  });
};

module.exports = findOne;
