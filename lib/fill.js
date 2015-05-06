var redis = require('redis');
var conf = require('../conf.json');
var pub = redis.createClient();

var populate = function(done) {
  for (var i=0; i<100000; i++) {
    var message = conf.defaults;
    message.doc = {version: i, module: 'send'};
    message.action = 'insert';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }
  done();
};

populate(function(){
  console.log('done!');
});
