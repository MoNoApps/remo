var closeDB = function(com) {
  com.db.close();
  com.cb(com.err, 'Connection closed');
};

module.exports = closeDB;
