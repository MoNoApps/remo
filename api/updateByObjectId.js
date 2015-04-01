var parseOId = require('./parseOId');

var updateByObjectId = function(props) {
  this.connect(this.merge( this.props, props ), function(com){
    var col = com.db.collection(com.collection);
    com.query[com.key] = parseOId(com.query[com.key]);

    col.update(com.query, com.doc, com.concern, function(err, results) {
      com.db.close();
      com.cb(err, results);
    });
  });
};

module.exports = updateByObjectId;
