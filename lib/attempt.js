var remo = require('../index');

var attempt = function(db, m, cb) {
  switch(m.action) {
    case 'set':
    case 'find':
    case 'unset':
    case 'insert':
    case 'update':
      remo[m.action].apply(this, [db, m, cb]);
      break;
    default:
      return 'Non processable attempt';
  }
};

module.exports = attempt;
