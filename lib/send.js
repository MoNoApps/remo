var ReMo = require('../index');

var selector = function(msg){
  if(!msg){ return console.log('Message is required.'); }

  switch(msg.action){
    case 'insert':
      var remo = new ReMo(msg);
      remo.insert();
      break;
    default:
      return console.log('Action required.');
  }
};

module.exports = selector;

