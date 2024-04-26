// https://leetcode.com/problems/minimum-falling-path-sum-ii/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
  const n = grid.length;

  for (let i = n - 2; i >= 0; i -= 1) {
    for (let j = 0; j < n; j += 1) {
      let min = Infinity;
      for (let k = 0; k < n; k += 1) {
        if (j === k) continue;
        min = Math.min(min, (grid[i][j] + grid[i+1][k]));
      }
      grid[i][j] = min;
    }
  }

  return Math.min(...grid[0]);
};
