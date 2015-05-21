var redis = require('redis');
var conf = require('../conf.json');
var pub = redis.createClient();

var populate = function(done) {
  for (var i=0; i<2000; i++) {
    var message = {};
    message.collection = 'mine';
    message.doc = {version: i, module: 'send'};
    message.action = 'insert';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }

  for (var j=0; j<2000; j++) {
    var message = {};
    message.limit = 1;
    message.sort = {module: 1};
    message.project = {_id: 1};
    message.collection = 'mine';
    message.query = {version: j, module: 'send'};
    message.action = 'find';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }

  for (var k=0; k<2000; k++) {
    var message = {};
    message.collection = 'mine';
    message.query = {version: k, module: 'send'};
    message.doc = { $set: { updatedAt: new Date().getTime()} };
    message.action = 'update';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }

  for (var l=0; l<2000; l++) {
    var message = {};
    message.collection = 'mine';
    message.query = {version: l};
    message.doc = {setValue: new Date().getTime(), title: 'mine item'};
    message.action = 'set';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }

  for (var m=0; m<2000; m++) {
    var message = {};
    message.collection = 'mine';
    message.query = {version: m};
    message.doc = {setValue: 1 };
    message.action = 'unset';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }

  done();
};

populate(function(){
  console.log('done!');
});
