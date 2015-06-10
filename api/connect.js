var connect = function(com, next) {
  if(!com) { return console.log('Missing com object.'); }
  if(!com.url) { return console.log('Missing db url.'); }

  if(com.db) {
    next(com);
  } else {
    var stime = new Date().getTime();
    var merge = require('../api/merge');
    var client = require('mongodb').MongoClient;

    client.connect(com.url, function(err, db) {
      next(merge(com, {err: err, db: db, stime: stime}));
    });
  }
};

module.exports = connect;
