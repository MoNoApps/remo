var connect = function(com, next) {
  com.stime = new Date().getTime();
  var client = require('mongodb').MongoClient;
  if(com.db){
    return next(com);
  }else{
    client.connect(com.url, function(err, db) {
      com.err = err;
      com.db = db || false;

      next(com);
    });
  }
};

module.exports = connect;
