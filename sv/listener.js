var redis = require('redis');
var sub = redis.createClient();
var pub = redis.createClient();

sub.subscribe('remo');
sub.on("remo", function (channel, message) {
  console.log(message);
});

setInterval(function() {
  //console.log('o');
}, 1000);

setInterval(function() {
  pub.publish('remo','remo:listening');
}, 2000);
