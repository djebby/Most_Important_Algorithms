// https://leetcode.com/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const heightsCount = new Array(101).fill(0);

  for (const height of heights) heightsCount[height] += 1;

  let unexpected = 0;
  let i = 0;
  
  for (let j = 1; j <= 100; j += 1) {

    while (heightsCount[j] > 0) {
      if (heights[i] !== j) unexpected += 1;

      heightsCount[j] -= 1;
      i += 1;
    }

  }

  return unexpected;

};
