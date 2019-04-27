const assert = require('assert');
const Remo = require('../remo');
const messages = require('../lib/messages.json');
const config = require('../config.json');

describe('remo api', () => {
  let remoInstance;

  beforeEach(() => {
    remoInstance = new Remo();
  });

  it('close db', (done) => {
    remoInstance.connect({}, () => {
      assert.equal(remoInstance.status, config.status.CONNECTED);
      remoInstance.close({}, (res) => {
        assert.equal(res.error, undefined);
        assert.equal(remoInstance.status, config.status.CLOSED);
        done();
      });
    });
  });

});
