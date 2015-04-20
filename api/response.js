var response = function(com) {
  com.etime = new Date().getTime();
  com.ttime = com.etime - com.stime;
  console.log( com.ttime );
  if(com){
    if(com.db){
      com.db.close();
    }
  }
};

module.exports = response;
