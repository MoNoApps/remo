var upsert = function(props) {
  this.options = { upsert: true };
  this.props.doc.$unset[props.key] = 1;
  this.update(this.merge( this.props, props ));
};

module.exports = upsert;
