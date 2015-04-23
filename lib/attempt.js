var remo = require('../index');

var attempt = function(db, m, cb) {
  switch(m.action) {
    case 'insert':
      remo.insert(db, m, cb);
      break;
    default:
      return 'Non processable attempt';
  }
};

module.exports = attempt;
