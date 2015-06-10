// Rewrite old properties with new ones.
var merge = function(props, newProps) {
  console.log(props);
  console.log(newProps);
  for(var p in newProps) {
    console.log(p);
    if (newProps.hasOwnProperty(p)) {
      props[p] = newProps[p];
    }
  }
  return props;
};

module.exports = merge;
