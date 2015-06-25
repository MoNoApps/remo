var remo = require('../index');

var attempt = function(db, m, cb) {
  switch(m.action) {
    case 'set':
    case 'inc':
    case 'find':
    case 'drop':
    case 'unset':
    case 'count':
    case 'insert':
    case 'update':
    case 'findOne':
      remo[m.action].apply(this, [db, m, cb]);
      break;
    default:
      cb('Non processable attempt');
      break;
  }
};

module.exports = attempt;
