# ReMo
Redis and Mongo for async and slow servers.

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
"output" : "db:mongo:output"  # Output from mongo[unused]
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
* Listen for changes node/ruby
* Count pending queries
* Open a connection with mongo
* Process a block of queries
* Save
* Close the mongo connection

## Test
````sh
npm install gulp
npm install gulp-jshint

gulp
````

## Ideas
* Remove code complexity.
* Separate by function. [OK]
* Export all in one file. [OK]
* Add inc, set, unset, upsert functions.
* Use lower case for naming. [OK]
* Remove prototype functions. [OK]
