# ReMo
Redis and Mongo for async and slow servers.

## Metrics
[![Code Climate](https://codeclimate.com/github/MoNoApps/remo/badges/gpa.svg)](https://codeclimate.com/github/MoNoApps/remo) [![Test Coverage](https://codeclimate.com/github/MoNoApps/remo/badges/coverage.svg)](https://codeclimate.com/github/MoNoApps/remo)

## Queue Query List
Create a list on memory, save on disk.

## Standalone ReMo
User ReMo to manage input queries.

## ReMo

````js
/*** dependencies ***/
var ReMo = require('remo');

/***    vars     ***/
var opts = {};
var remo = new ReMo(opts);
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
* Separate by function.
* Export all in one file.
* Add inc, set, unset, upsert functions.
* Use lower case instead.
* Remove prototype functions.
