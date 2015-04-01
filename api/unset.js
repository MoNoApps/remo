var unset = function(props) {
  this.props.doc = {$unset: {}};
  this.props.doc.$unset[props.key] = 1;
  this.update(this.merge( this.props, props ));
};

module.exports = unset;
