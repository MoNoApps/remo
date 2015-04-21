var ReMo = require('../index');

var attempt = function(msg) {

  switch(msg.action) {
    case 'insert':
      remo.insert();
      break;
    default:
      return 'Non processable attempt';
  }
};

module.exports = attempt;
