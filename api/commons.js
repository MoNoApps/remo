var commons = {
  "inc": 1,
  "doc": {},
  "query": {},
  "project": {},
  "index": "_id",
  "limit": 10,
  "options": {"w": 1},
  "sort": {"_id": 1},
  "concern": {"w": 1},
  "collection": "remo",
  "url": "mongodb://127.0.0.1/remo",
  "cb": require('./response')
};

module.export = commons;
