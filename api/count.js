var count = function(props) {
  this.connect(this.merge( this.props, props ), function(com) {
    if(!com.db){ return com.cb('No db object found', false); }
    var col = com.db.collection( com.collection );
    col.count(com.query, function(err, results) {
      //com.db.close();
      com.cb(err, results);
    });
  });
};

module.exports = count;
