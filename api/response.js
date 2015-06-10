var response = function(com) {
  if(com && !com.pooling) {
    if(com.db) {
      com.etime = new Date().getTime();
      com.ttime = com.etime - com.stime;
      com.db.close();
    }
  }
};

module.exports = response;
