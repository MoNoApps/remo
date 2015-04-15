var redis = require('redis');
var send = require('./send');
var conf = require('../conf.json');

var sub = redis.createClient();

setInterval(function() {
  sub.llen(conf.queue.input, function(err, size) {
    if(!err && size) {
      var numIt = (size > conf.queue.size) ? conf.queue.size : size;
      var block = setInterval(function() {
        if(numIt > 0) {
          sub.lpop(conf.queue.input, function(err, msgStr) {
            if(err){ return console.log(err); }

            try {
              send( JSON.parse(msgStr) );
            } catch(e) {
              console.log('Error sending data.');
            }

          });
          numIt -=1;
        }else{
          clearInterval(block);
        }
      }, conf.queue.wait);
    }
  });
}, conf.sleep );
