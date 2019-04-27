const config = require('./config.json');
const client = require('mongodb').MongoClient;
const RemoEvents = require('./lib/remoEvents');

class Remo extends RemoEvents {

  constructor(com) {
    super(com);
  }

  connect(params, next) {
    this.onAction(params, next);
    client.connect(this.com.url, this.onConnect.bind(this));
  }

  close(params, next) {
    this.onAction(params, next);
    this.onClose();
  }

}

module.exports = Remo;
