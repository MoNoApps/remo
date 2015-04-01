var response = function(com) {
  com.etime = new Date().getTime();
  com.ttime = com.etime - com.stime;
  console.log( com.ttime );
};

module.exports = response;
