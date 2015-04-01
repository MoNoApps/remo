var multi = function(props) {
  this.props.options.multi = true;
  this.update(this.merge( this.props, props ));
};

module.exports = multi;
