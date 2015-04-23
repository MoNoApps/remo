var redis = require('redis');
var attem = require('./attem');
var conf = require('../conf.json');
var mongo = require('mongodb').MongoClient;
var subR = redis.createClient();
var merge = require('../api/merge');

var empty = function(){};

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
                if(message===null){ return; }
                if(!message || !message.action){

                  subR.lpush([conf.queue.retry, msgStr], empty);
                }else{
                  attem(db, merge(require('../api/commons'), message), function(err, res){
                    if(err){
                      subR.lpush([conf.queue.retry, msgStr], empty);
                      subR.lpush([conf.queue.error, JSON.stringify(err)], empty);
                    }else{
                      subR.lpush([conf.queue.results, JSON.stringify(res)], empty);
                    }
                  });
                }
              } catch(e) {
                console.log(e);
                subR.lpush([conf.queue.error, JSON.stringify(e)], empty);
              }

            });
            numIt -=1;
          }else{
            clearInterval(block);
          }
        }, conf.queue.wait);
      }else{
        console.log(process.memoryUsage());
      }
    });
  }, conf.sleep );
});
