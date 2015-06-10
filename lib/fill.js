var redis = require('redis');
var conf = require('../conf.json');
var pub = redis.createClient();

var push = function(message) {
  pub.rpush(
    [
      conf.queue.input,
      JSON.stringify(message)
    ],
    function(){}
  );
};

var iteration = function() {
  for (var i=0; i<2000; i++) {

    push({
      collection: 'mine',
      doc: {version: i, module: 'send'},
      action: 'unknown'
    });

    push({
      collection: 'mine',
      doc: {version: i, module: 'send'},
      action: 'insert'
    });

    push({
      collection: 'mine',
      doc: {version: i, module: 'send'},
      limit: 1,
      sort: {module: 1},
      project: {_id: 1},
      action: 'find'
    });

    push({
      collection: 'mine',
      doc: { $set: { updatedAt: new Date().getTime()} },
      query: {version: i, module: 'send'},
      action: 'update'
    });

    push({
      collection: 'mine',
      doc: {setValue: new Date().getTime(), title: 'mine item'},
      query: {version: i},
      action: 'set'
    });

    push({
      collection: 'mine',
      doc: {setValue: 1},
      query: {version: i},
      action: 'unset'
    });
  }
};

var populate = function(done) {
  iteration();
  done();
};

populate(function(){
  console.log('done!');
});
