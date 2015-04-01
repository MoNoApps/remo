var parseOId = require('./parseOId');

var removeByObjectId = function(props) {
  this.connect(this.merge( this.props, props ), function(com){
    com.query[com.key] = parseOId(com.query[com.key]);
    var col = com.db.collection(com.collection);
    col.remove(com.query, function(err, results) {
      com.db.close();
      com.cb(err, results);
    });
  });
};

module.exports = removeByObjectId;
