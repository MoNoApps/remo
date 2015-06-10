module.exports = function(db, message, cb) {
  db.dropDatabase(function(err, results) {
    cb(err, results);
  });
};
