// https://leetcode.com/problems/path-with-maximum-gold/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  // 1 <= m, n <= 15
  const m = grid.length;
  const n = grid[0].length;

  const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  const backtracking = (r, c, visited = new Set()) => {
    if (Math.min(r, c) < 0 || r >= m || c >= n || grid[r][c] === 0 || visited.has(`${r},${c}`)) {
      return 0;
    }

    visited.add(`${r},${c}`);

    let maxSum = 0;
    for (const [dr, dc] of moves) {
      maxSum = Math.max(maxSum, backtracking(r+dr, c+dc, visited))
    }

    visited.delete(`${r},${c}`);

    return grid[r][c] + maxSum;
  }



  let maximumGold = -Infinity;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      maximumGold = Math.max(maximumGold, backtracking(i, j));
    }
  }

  return maximumGold;
};
