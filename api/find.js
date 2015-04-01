var find = function(props) {
  this.connect(this.merge( this.props, props ), function(com) {
    var col = com.db.collection( com.collection );
    col.find(com.query, com.project, com.options)
       .limit(com.limit)
       .sort(com.sort)
       .toArray(function(err, results) {
          com.db.close();
          com.cb(err, results);
    });
  });
};

module.exports = find;
