const assert = require('assert');
const Remo = require('../remo');
const messages = require('../lib/messages.json');
const config = require('../config.json');

describe('remo api', () => {

  it('connect array param', (done) => {
    const remo = new Remo();
    remo.connect([], (res) => {
      assert.equal(res.error, undefined);
      assert.equal(remo.status, config.status.CONNECTED);
      done();
    });
  });

  it('connect object param', (done) => {
    const remo = new Remo();
    remo.connect({}, (res) => {
      assert.equal(res.error, undefined);
      assert.equal(remo.status, config.status.CONNECTED);
      done();
    });
  });

  it('connect boolean=false', (done) => {
    const remo = new Remo();
    remo.connect(false, (res) => {
      assert.equal(res.error, null);
      assert.equal(remo.messages.length, 1);
      assert.equal(remo.messages[0], messages.WARN001);
      assert.equal(remo.status, config.status.CONNECTED);
      done();
    });
  });

  it('connect boolean=true', (done) => {
    const remo = new Remo();
    remo.connect(true, (res) => {
      assert.equal(res.error, undefined);
      assert.equal(remo.status, config.status.CONNECTED);
      done();
    });
  });

  it('connect fake object', (done) => {
    const remo = new Remo();
    remo.connect({ db: {} }, (res) => {
      assert.equal(res.error, undefined);
      assert.equal(remo.status, config.status.CONNECTED);
      done();
    });
  });

});
