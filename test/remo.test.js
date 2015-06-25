var remo = require('../index');
var assert = require("assert");

describe('remo api', function(){
  it('find', function() { assert.ok(remo.find); });
  it('drop', function() { assert.ok(remo.drop); });
  it('multi', function() { assert.ok(remo.multi); });
  it('count', function() { assert.ok(remo.count); });
  it('create', function() { assert.ok(remo.create); });
  it('insert', function() { assert.ok(remo.insert); });
  it('update', function() { assert.ok(remo.update); });
  it('remove', function() { assert.ok(remo.remove); });
  it('connect', function() { assert.ok(remo.connect); });
  it('closeDB', function() { assert.ok(remo.closeDB); });
  it('findOne', function() { assert.ok(remo.findOne); });
  it('dropIndex', function() { assert.ok(remo.dropIndex); });
  it('creatIndex', function() { assert.ok(remo.createIndex); });
  it('dropDatabase', function() { assert.ok(remo.dropDatabase); });
  it('findByObjectId', function() { assert.ok(remo.findByObjectId); });
  it('updateByObjectId', function() { assert.ok(remo.updateByObjectId); });
  it('removeByObjectId', function() { assert.ok(remo.removeByObjectId); });
  it('inc', function() { assert.ok(remo.inc); });
  it('set', function() { assert.ok(remo.set); });
  it('unset', function() { assert.ok(remo.unset); });
  it('upsert', function() { assert.ok(remo.upsert); });
  it('merge', function() { assert.ok(remo.merge); });
  it('parseOId', function() { assert.ok(remo.parseOId); });
});
