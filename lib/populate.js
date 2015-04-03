var redis = require('redis');
var remo  = require('../index.js');
var conf  = require('../conf.json');
var pub = redis.createClient();

var populate = function(){
  for (var i=0; i<1000; i++){
    var r = new remo({doc: {version: i}});
    var msg = JSON.stringify(r.props);
    msg.action = 'insert';
    pub.rpush([conf.queue.input, JSON.stringify(msg)], function(){});
  }
};

populate();

