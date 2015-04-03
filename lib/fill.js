var redis = require('redis');
var conf  = require('../conf.json');
var pub = redis.createClient();

var populate = function( cb ){
  for (var i=0; i<10000; i++){
    var message = conf.defaults;
    message.doc = {version: i, module: 'send'};
    message.action = 'insert';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }

  cb();
};

populate(function(){ console.log('done'); });

