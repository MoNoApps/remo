var ObjectID = require('mongodb').ObjectID;

var parseOId = function(value){
  try{
    return new ObjectID.createFromHexString(value);
  }catch(e){
    return {
      code: 'NotValidHex',
      message: 'Key must be a valid hex.'
    };
  }
};

module.exports = parseOId;
