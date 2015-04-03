var response = function(com) {
  com.etime = new Date().getTime();
  com.ttime = com.etime - com.stime;
  console.log( com.ttime );
  com.db.close();
};

module.exports = response;
