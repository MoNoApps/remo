# Steps

## Workflow
````js
{
  "1": "Messages on redis",
  "2": "Listen for queries",
  "3": "Open mongodb",
  "4": "Process queries",
  "5": "Save on disk",
  "6": "Close mongodb"
}
````

## Requirements
Common scripts
````sh
# run mongod v3
mongod --directoryperdb --storageEngine wiredTiger
# Clean redis
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

Flood redis again and see the monitor
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
