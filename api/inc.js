var inc = function(props) {
  this.props.doc = {$inc: {}};
  this.props.doc.$inc[props.key] = props.qty;
  this.update(this.merge( this.props, props ));
};

module.exports = inc;
