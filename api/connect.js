var log = function(m) { return console.log(m); };
var client = require('mongodb').MongoClient;

module.exports = function(com, next) {

  if (!com) { log('Missing com object.'); }
  if (com.db) { return next(false, com.db); }
  if (!com.url) { log('Missing db url.'); }
  if(!client){ return next('Client lib failed'); }

  try{
    client.connect(com.url, function(err, db) {
      if (err) { log(err); }
      if (!db) { log('Unavailable connection.'); }
      next(err, db);
    });
  }catch(e){
    next(e);
  }

};
