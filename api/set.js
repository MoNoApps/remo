var set = function(props) {
  this.props.doc = {$set: {}};
  this.props.doc.$set[props.key] = props.val;
  this.update(this.merge( this.props, props ));
};

module.exports = set;
