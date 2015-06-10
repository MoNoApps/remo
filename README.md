# ReMo
Redis and Mongo for async tasks or slow servers.

## Metrics
[![Code Climate](https://codeclimate.com/github/MoNoApps/remo/badges/gpa.svg)](https://codeclimate.com/github/MoNoApps/remo) [![Test Coverage](https://codeclimate.com/github/MoNoApps/remo/badges/coverage.svg)](https://codeclimate.com/github/MoNoApps/remo)

## Queue Query List
Create a list on memory, save on disk.

## Standalone ReMo
Use ReMo to manage input queries.

## ReMo
Configure your queues:
````sh
# conf.json
"input"  : "db:mongo:input"   # All input queries
"retry"  : "db:mongo:retry"   # Queries not processed
"output" : "db:mongo:output"  # Output for 'find'
"errors" : "db:mongo:errors"  # Logging errors
"results": "db:mongo:results" # Logging results
````

Configure your defaults
````sh
# conf.json
{
  "defaults": {
    ...
    "url": "mongodb://127.0.0.1/remo"
    ...
  }
}
````
## Sample ReMo Work

````js
var remo = require('remo');
var subR = redis.createClient();
var mongo = require('mongodb').MongoClient;

mongo.connect(conf.defaults.url, function(err, db) {
  subR.lpop('db:mongo:input', function(err, message) {
    remo.insert(db, message, function(err, results) {
      subR.lpush(['db:mongo:errors', JSON.stringify(err)], empty);
      subR.lpush('db:mongo:results', JSON.stringify(results)], empty);
    });
  });
});

````

## Learn By Example
Run your mongod v3 service
````sh
mongod --directoryperdb --storageEngine wiredTiger
````

Clean redis
````sh
redis-cli
127.0.0.1:6379>FLUSHALL
````

Flood redis
````sh
node lib/fill.js
#done!
````

Count input queries
````sh
redis-cli
127.0.0.1:6379>LLEN "db:mongo:input"
(integer) 100000
````

Open your monitor
````sh
redis-cli monitor
````

From redis to mongodb listening for changes
````sh
node lib/init.js
````

Play with times
````js
#conf.json
{
"sleep": 1000,  # Listen for changes every second
"queue":{
  "size": 1000, # Slice whole process into blocks of 1000 queries
  "wait": 0,    # Time between each query
...
}
````

Flood redis again and see monitor
````sh
node lib/fill.js
#done!
````
````sh
{ rss: 81006592, heapTotal: 61790464, heapUsed: 38060592 }
Attempt with  1000  queries on  1430927005463
````
Mesure of processed queries
````sh
127.0.0.1:6379> LLEN "db:mongo:results"
(integer) 100000
127.0.0.1:6379> LRANGE "db:mongo:results" 0 1
1) "{\"ok\":1,\"n\":1}"
2) "{\"ok\":1,\"n\":1}"
````

## Redis List Expected Message

Save your messages on redis
````js
var redis = require('redis');
var conf = require('../conf.json');
var pub = redis.createClient();

var message = conf.defaults;
message.doc = {version: 1, module: 'readme'};
message.action = 'insert';
pub.rpush(['db:mongo:input', JSON.stringify(message)], function(){});
````

## Workflow
* Send JSON http request.
* Save JSON in redis.
* Listening for changes node/ruby
* Count pending queries
* Open a connection with mongo
* Process a block of queries
* Save on disk
* Close the mongo connection

## Code Quality
````sh
npm install gulp
npm install gulp-jshint

gulp
````

