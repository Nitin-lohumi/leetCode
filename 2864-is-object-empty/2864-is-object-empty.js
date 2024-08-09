/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  let object = Object.keys(obj);
  if(object.length>0){
    return false;
  }
  return true;
};