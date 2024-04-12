// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length;
  const maxLeft = new Array(n);
  const maxRight = new Array(n);

  maxLeft[0] = 0;
  maxRight[maxRight.length - 1] = 0;

  for (let i = 1; i < n; i += 1) {
    maxLeft[i] = Math.max(maxLeft[i-1], height[i-1]);
  }
  
  for (let i = n - 2; i >= 0; i -= 1) {
    maxRight[i] = Math.max(maxRight[i+1], height[i+1]);
  }

  let water = 0;

  for (let i = 0; i < n; i += 1) {
    water += Math.max(Math.min(maxRight[i], maxLeft[i]) - height[i], 0);
  }

  return water;
};

