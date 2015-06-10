var closeDB = function(db, cb) {
  db.close(cb);
};

module.exports = closeDB;
