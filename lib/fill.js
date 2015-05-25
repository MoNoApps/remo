var redis = require('redis');
var conf = require('../conf.json');
var pub = redis.createClient();

var insert = function(){
  for (var i=0; i<332; i++) {
    message = {};
    message.collection = 'mine';
    message.doc = {version: i, module: 'send'};
    message.action = 'insert';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }
};

var find = function(){
  for (var j=0; j<332; j++) {
    message = {};
    message.limit = 1;
    message.sort = {module: 1};
    message.project = {_id: 1};
    message.collection = 'mine';
    message.query = {version: j, module: 'send'};
    message.action = 'find';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }
};

var update = function(){
  for (var k=0; k<332; k++) {
    message = {};
    message.collection = 'mine';
    message.query = {version: k, module: 'send'};
    message.doc = { $set: { updatedAt: new Date().getTime()} };
    message.action = 'update';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }
};

var set = function(){
  for (var l=0; l<332; l++) {
    message = {};
    message.collection = 'mine';
    message.query = {version: l};
    message.doc = {setValue: new Date().getTime(), title: 'mine item'};
    message.action = 'set';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }
};
var unset = function(){
  for (var m=0; m<332; m++) {
    message = {};
    message.collection = 'mine';
    message.query = {version: m};
    message.doc = {setValue: 1 };
    message.action = 'unset';
    pub.rpush([conf.queue.input, JSON.stringify(message)], function(){});
  }
};

var populate = function(done) {
  insert();
  find();
  update();
  set();
  unset();

  done();
};

populate(function(){
  console.log('done!');
});
