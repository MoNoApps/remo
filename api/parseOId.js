var ObjectID = require('mongodb').ObjectID;

module.exports = function(value) {
  try {
    return new ObjectID.createFromHexString(value);
  } catch(e) {
    return {
      code: 'NotValidHex',
      message: 'Key must be a valid hex.'
    };
  }
};
