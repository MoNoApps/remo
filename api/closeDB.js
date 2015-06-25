module.exports = function(db, cb) {
  try{ db.close(cb); }
  catch(e){ cb(e);}

};
