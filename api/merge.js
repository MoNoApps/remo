/**
  * Rewrite old properties with new ones.
  */
var merge = function(props, newProps) {
  for(var k in newProps) {
    props[k] = newProps[k];
  }
  return props;
};

module.exports = merge;
