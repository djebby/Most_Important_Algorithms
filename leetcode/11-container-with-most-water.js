// https://leetcode.com/problems/container-with-most-water/ (top-interview-questions)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxWater = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    // shortest line * distance between the two lines
    const waterAmount = Math.min(height[l], height[r]) * (r - l);
    // update the max water amount
    maxWater = Math.max(maxWater, waterAmount);
    // pointer update (move the shortest line)
    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return maxWater;
};