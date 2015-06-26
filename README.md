# ReMo
Save data from memory to disk for async/background/slow tasks.

## Metrics
[![Code Climate](https://codeclimate.com/github/MoNoApps/remo/badges/gpa.svg)](https://codeclimate.com/github/MoNoApps/remo)
[![Test Coverage](https://codeclimate.com/github/MoNoApps/remo/badges/coverage.svg)](https://codeclimate.com/github/MoNoApps/remo)
[![Circle CI](https://circleci.com/gh/MoNoApps/remo.svg?style=svg)](https://circleci.com/gh/monoapps/remo)

## Standalone ReMo
How to use the package? See this [implementation](https://github.com/MoNoApps/barco).
````js
var remo = require('remo');
var message = { .... };
remo.pool(message, function(){ ... });
````
Message must contain the 'action'. See [attempt actions](lib/attempt.js).

## ReMo
Configure your queues and defaults:
````sh
# conf.json
"input"  : "db:mongo:input"   # All input queries
"retry"  : "db:mongo:retry"   # Queries not processed
"output" : "db:mongo:output"  # Output for 'find'
"errors" : "db:mongo:errors"  # Logging errors
"results": "db:mongo:results" # Logging results
````

## Learn ReMo
Follow the [step by step guide](steps.md)  for massive queries.

## Redis List Expected Message

````js
var redis = require('redis');
var pub = redis.createClient();

var message = conf.defaults;
message.doc = {version: 1, module: 'readme'};
message.action = 'insert';
pub.rpush(['db:mongo:input', JSON.stringify(message)], function(){});
````

## Code Quality

````sh
# gulp and jshint
npm install gulp gulp-jshint -g; gulp;
# mocha for tests
npm install mocha -g; mocha;
# coverage
make cov
````
