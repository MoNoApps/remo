var commons = {
  "url": "mongodb://127.0.0.1/remo",
  "name": "remo",
  "query": {},
  "project": {},
  "options": {"w": 1},
  "sort": {"_id": 1},
  "limit": 10,
  "doc": {},
  "key": "_id",
  "concern": {"w": 1},
  "cb": require('./response')
};

module.export = commons;
