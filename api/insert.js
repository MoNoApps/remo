var insert = function(com) {
  var col = com.db.collection(com.collection);
  col.insert(com.doc, function(err, results) {
    com.err = err || false;
    com.results = results || false;
    com.cb(com);
  });
};

module.exports = insert;
