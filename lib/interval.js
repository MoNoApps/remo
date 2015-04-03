var redis = require('redis');
var conf  = require('../conf.json');
var sub   = redis.createClient();

setInterval(function() {
  sub.llen(conf.queue.input, function(err, size) {
    if(!err && size) {
      var numIt = ( size>10 ? 10: size );
      var block = setInterval(function() {
        if(numIt > 0) {
          sub.lpop(conf.queue.input, function(err, res) {
            //TODO:add try/catch for parse
            console.log(err, JSON.parse(res));
          });
          numIt -=1; 
        }else{
          clearInterval(block);
        }
      }, 10);
    } 
  });
}, 1000 );

