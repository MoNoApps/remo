// Rewrite old properties with new ones.
function merge (props, newProps) {
  for(var p in newProps) {
    if (newProps.hasOwnProperty(p)) {
      props[p] = newProps[p];
    }
  }
  return props;
}
module.exports = merge;
