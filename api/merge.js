/**
  * Rewrite old properties with new ones.
  */
var merge = function(props, newProps) {
  for(var p in newProps) {
    if (newProps.hasOwnProperty(p)) {
      props[p] = newProps[p];
    }
  }
  return props;
};

module.exports = merge;
