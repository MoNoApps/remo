(function(remo){

//--- common functions ---//
remo.find = require('./api/find');
remo.drop = require('./api/drop');
remo.multi = require('./api/multi');
remo.count = require('./api/count');
remo.create = require('./api/create');
remo.insert = require('./api/insert');
remo.update = require('./api/update');
remo.remove = require('./api/remove');
remo.connect = require('./api/connect');
remo.closeDB = require('./api/closeDB');
remo.findOne = require('./api/findOne');
remo.dropIndex = require('./api/dropIndex');
remo.createIndex = require('./api/createIndex');
remo.dropDatabase = require('./api/dropDatabase');
//--- complex functions---//
remo.findByObjectId = require('./api/findByObjectId');
remo.updateByObjectId = require('./api/updateByObjectId');
remo.removeByObjectId = require('./api/removeByObjectId');
//--- math functions ---//
remo.inc = require('./api/inc');
//--- object functions ---//
remo.set = require('./api/set');
remo.unset = require('./api/unset');
remo.upsert = require('./api/upsert');
//--- helpers ---//
remo.merge = require('./api/merge');
remo.parseOId = require('./api/parseOId');
//--- db pool connection ---//
remo.pool = require('./api/pool');
remo.attempt = require('./api/attempt');

})(module.exports);
