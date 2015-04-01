var parseOId = require('./parseOId');

var findByObjectId = function(props) {
  this.connect(this.merge( this.props, props ), function(com) {
    com.query[com.index] = parseOId(com.query[com.index]);
    var col = com.db.collection(com.collection);
    col.findOne(com.query, function(err, results) {
      com.db.close();
      com.cb(err, results);
    });
  });
};

module.exports = findByObjectId;
