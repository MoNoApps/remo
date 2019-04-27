var redis = require('redis');
var conf = require('../config.json');
var pub = redis.createClient();

module.exports = function(message, cb) {
  pub.rpush(
    [
      conf.queue.input,
      JSON.stringify(message)
    ],
    function(err, rsp){
      cb(err,rsp);
    }
  );
};
