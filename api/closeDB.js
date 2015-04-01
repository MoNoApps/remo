var closeDB = function(com) {
  com.db.close();
  com.cb(err, 'Connection closed');
};

module.exports = closeDB;
