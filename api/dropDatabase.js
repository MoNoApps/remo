var dropDatabase = function(props) {
  this.connect(this.merge( this.props, props ),function(com) {
    com.db.dropDatabase(function(err, results) {
      com.db.close();
      com.cb(err, results);
    });
  });
};

module.exports = dropDatabase;
