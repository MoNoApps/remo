module.exports = function(db, message, cb) {
  db.collection(message.collection)
  .find(message.query, message.project, message.options)
  .limit(message.limit)
  .sort(message.sort)
  .toArray(function(err, results) {
    cb(err, results);
  });
};
