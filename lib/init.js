var redis = require('redis');
var attempt = require('./attempt');
var conf = require('../conf.json');
var mongo = require('mongodb').MongoClient;
var subR = redis.createClient();
var merge = require('../api/merge');
var connect = require('../api/connect');

var empty = function(){};

var attemptOne = function(msg, db) {
  try {
    var message = JSON.parse(msg);
    if(message===null) { return; }
    if(!message || !message.action) {

      subR.lpush([conf.queue.retry, msg], empty);
    }else{
      attempt(db, merge(conf.defaults, message), function(err, res) {
        if(err) {
          subR.lpush([conf.queue.retry, msg], empty);
          subR.lpush([conf.queue.error, JSON.stringify(err)], empty);
        } else {
          if(message.action==='find'){
            subR.lpush([conf.queue.output, JSON.stringify(res)], empty);
          } else {
            subR.lpush([conf.queue.results, JSON.stringify(res)], empty);
          }
        }
      });
    }
  } catch(e) {
    subR.lpush([conf.queue.retry, msg], empty);
    subR.lpush([conf.queue.error, JSON.stringify(e)], empty);
  }
};

var attemptAll = function(size, db) {

  var numIt = (size > conf.queue.size) ? conf.queue.size : size;
  console.log('Attempt with ', numIt, ' queries on ', new Date().getTime());

  var block = setInterval( function() {
    if(numIt > 0) {
      subR.lpop(conf.queue.input, function(err, msg) {
        if(err){ return console.log(err); }
        attemptOne(msg, db);
      });
      numIt -=1;
    }else{
      clearInterval(block);
    }
  }, conf.queue.wait);

};

connect(merge(conf.defaults, {pooling: true}), function(err, db) {
  setInterval( function() {
    subR.llen(conf.queue.input, function(err, size) {
      if(!err && size) {
        return attemptAll(size, db);
      }
      
      console.log(process.memoryUsage());
    });
  }, conf.sleep );

});
