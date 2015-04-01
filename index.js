//remo library
var remo = function(props){
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
    "cb": require('./api/response')
  };
  this.props = this.merge( commons, props );
};

//--- common functions ---//
remo.prototype.find = require('./api/find');
remo.prototype.drop = require('./api/drop');
remo.prototype.multi = require('./api/multi');
remo.prototype.count = require('./api/count');
remo.prototype.create = require('./api/create');
remo.prototype.insert = require('./api/insert');
remo.prototype.update = require('./api/update');
remo.prototype.remove = require('./api/remove');
remo.prototype.connect = require('./api/connect');
remo.prototype.closeDB = require('./api/closeDB');
remo.prototype.findOne = require('./api/findOne');
remo.prototype.dropIndex = require('./api/dropIndex');
remo.prototype.createIndex = require('./api/createIndex');
remo.prototype.dropDatabase = require('./api/dropDatabase');
//--- complex functions---//
remo.prototype.findByObjectId = require('./api/findByObjectId');
remo.prototype.updateByObjectId = require('./api/updateByObjectId');
remo.prototype.removeByObjectId = require('./api/removeByObjectId');
//--- math functions ---//
remo.prototype.inc = require('./api/inc');
remo.prototype.set = require('./api/set');
//--- object functions ---//
remo.prototype.unset = require('./api/unset');
remo.prototype.upsert = require('./api/upsert');
//--- helpers ---//
remo.prototype.merge = require('./api/merge');
remo.prototype.parseOId = require('./api/parseOId');

module.exports = remo;
