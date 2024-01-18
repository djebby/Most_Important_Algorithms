// https://leetcode.com/problems/group-by/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const groups = {};
  let key;
  for (const item of this) {
    key = fn(item);
    if (!groups.hasOwnProperty(key)) groups[key] = [item];
    else groups[key].push(item);
  }
  
  return groups;
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */