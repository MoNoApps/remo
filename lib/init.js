var redis = require('redis');
var attem = require('./attem');
var conf = require('../conf.json');
//var ReMo = require('../index');
var mongo = require('mongodb').MongoClient;
var subR = redis.createClient();

mongo.connect('mongodb://127.0.0.1/remo', function(err, db) {
  setInterval( function() {
    subR.llen(conf.queue.input, function(err, size) {
      if(!err && size) {
        var numIt = (size > conf.queue.size) ? conf.queue.size : size;
        var block = setInterval( function() {
          if(numIt > 0) {
            subR.lpop(conf.queue.input, function(err, msgStr) {
              if(err){ return console.log(err); }

              try {
                var message = JSON.parse(msgStr);
                if(!message || !message.action){
                  subR.lpush([conf.queue.retry, message], function(){});
                }else{
                  var col = db.collection(message.collection);
                  col.insert(message.doc, function(err, results) {
                    if(err){
                      subR.lpush([conf.queue.retry, msgStr], function(){});
                      subR.lpush([conf.queue.error, JSON.stringify(err)], function(){});
                    }
                  });
                }
              } catch(e) {
                subR.lpush([conf.queue.error, JSON.stringify(e)], function(){});
              }

            });
            numIt -=1;
          }else{
            clearInterval(block);
          }
        }, conf.queue.wait);
      }else{
        console.log('sleep ', new Date().getTime());
      }
    });
  }, conf.sleep );
});
