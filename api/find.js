module.exports = function(db, message, cb) {
  var col = db.collection(message.collection);
  col.find(message.query, message.project, message.options)
     .limit(message.limit)
     .sort(message.sort)
     .toArray(function(err, results) {
       cb(err, results);
  });
};
