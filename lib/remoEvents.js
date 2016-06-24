const config = require('../config.json');
const messages = require('./messages.json');

class RemoEvents {

  constructor(com) {
    this.com = com || config.defaults;
    this.status = config.status.CLOSED;
    this.messages = [];
  }

  onAction(params, next) {
    this.params = params;
    this.next = next;
    this.onMissingNext();
    this.onMissingParams();
    this.onInspectParams();
    this.onInspectNext();
    this.onMissingCom();
    this.onMissingUrl();
  }

  onMissingCom() {
    if (!this.com) {
      this.next({ error: messages.ERR002 });
    }
  }

  onMissingUrl() {
    if (!this.com.url) {
      this.next({ error: messages.URL });
    }
  }

  onMissingDB() {
    if (!this.db && !this.com.db) {
      this.next({ error: messages.ERR001 });
    }
  }

  onError(error) {
    this.next({ error: error });
  }

  onMissingParams() {
    if (!this.params) {
      this.messages.push(messages.WARN001);
    }
  }

  onMissingNext() {
    if (!this.next) {
      throw new Error(messages.ERR005);
    }
  }

  onConnect(error, db) {
    this.db = db;
    this.onMissingDB();
    this.status = config.status.CONNECTED;
    this.next({ error: error });
  }

  onClose() {
    this.db.close((error) => {
      this.status = config.status.CLOSED;
      this.next({ error: error });
    });
  }

  onInspectParams() {
    if (this.params && !this.params instanceof Object) {
      throw new Error(messages.ERR006);
    }
  }

  onInspectNext() {
    if (this.next && !this.next instanceof Function) {
      throw new Error(messages.ERR007);
    }
  }

}

module.exports = RemoEvents;
