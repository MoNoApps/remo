var create = function(props) {
  this.connect(this.merge( this.props, props ), function(com){
    com.db.createCollection(com.collection, function(err, collection) {
      com.db.close();
      com.cb(err, collection);
    });
  });
};

module.exports = create;
