const assert = require('assert');
const Remo = require('../remo');
const config = require('../config.json');

describe('remo lib', () => {

  it('constructor by default', () => {
    const remoInstance = new Remo();
    assert.equal(remoInstance.status, config.status.CLOSED);
  });

  it('constructor array param', () => {
    const remoInstance = new Remo([]);
    assert.equal(remoInstance.status, config.status.CLOSED);
  });

  it('constructor object param', () => {
    const remoInstance = new Remo({});
    assert.equal(remoInstance.status, config.status.CLOSED);
  });

  it('constructor boolean param', () => {
    const remoInstance = new Remo(false);
    assert.equal(remoInstance.status, config.status.CLOSED);
  });

  it('constructor boolean param', () => {
    const remoInstance = new Remo(true);
    assert.equal(remoInstance.status, config.status.CLOSED);
  });

  it('constructor fake object', () => {
    const remoInstance = new Remo({ db: {} });
    assert.equal(remoInstance.status, config.status.CLOSED);
  });

});
