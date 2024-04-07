// https://leetcode.com/problems/valid-parenthesis-string/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  
  const cache = {};
  const dfs = (idx, leftParenth, rightParenth) => {
    const key = `${idx},${leftParenth},${rightParenth}`;
    if (Object.hasOwn(cache, key)) return cache[key];

    if (idx === s.length) {
      cache[key] = leftParenth === rightParenth;
      return cache[key];
    }
    if (rightParenth > leftParenth) {
      cache[key] = false;
      return false;
    };

    let result;

    if (s[idx] === ')') result = dfs(idx + 1, leftParenth, rightParenth + 1);
    else if (s[idx] === '(') result = dfs(idx + 1, leftParenth + 1, rightParenth);
    else result = dfs(idx + 1, leftParenth, rightParenth + 1) || dfs(idx + 1, leftParenth + 1, rightParenth) || dfs(idx + 1, leftParenth, rightParenth);
    
    cache[key] = result;
    return result;
  }

  return dfs(0, 0, 0);

};


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidStringGreedySolution = function(s) {
  let minOpen = 0; // count of minimum possible open parenthesis
  let maxOpen = 0; // count of maximum possible open prenthesis

  for (let c of s) {
    if (c === '(') {
      minOpen += 1;
      maxOpen += 1;
    } else if (c === ')') {
      minOpen -= 1;
      maxOpen -= 1;
    } else {
      minOpen -= 1;
      maxOpen += 1;
    }

    if (maxOpen < 0) return false;
    if (minOpen < 0) minOpen = 0;
  }

  return minOpen === 0;
};
