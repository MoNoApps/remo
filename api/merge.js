// Rewrite old properties with new ones.
module.exports = function(props, newProps) {
  for(var p in newProps) {
    if (newProps.hasOwnProperty(p)) {
      props[p] = newProps[p];
    }
  }
  return props;
};
