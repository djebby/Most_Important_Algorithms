// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

  const m = grid.length;
  const n  = grid[0].length;

  for (let r = m - 1; r >= 0; r -= 1) {
    for (let c = n - 1; c >= 0; c -= 1) {
      if (r === m - 1 && c === n - 1) continue;
      grid[r][c] += Math.min(
        r+1 === m ? Infinity : grid[r+1][c],
        c+1 === n ? Infinity : grid[r][c+1]
      );
    }
  }

  return grid[0][0];

};
