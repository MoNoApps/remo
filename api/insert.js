var insert = function(props) {
  this.connect(this.merge( this.props, props ), function(com) {
    if(!com.db) {
      com.err = 'No db object found'; 
      return com.cb(com);
    }
    var col = com.db.collection(com.collection);
    col.insert(com.doc, function(err, results) {
      //com.db.close();
      com.err = err || false;
      com.results = results || false;
      com.cb(com);
    });
  });
};

module.exports = insert;

