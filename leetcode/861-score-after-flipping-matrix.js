// https://leetcode.com/problems/score-after-flipping-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  // flip all the rows that start with zero
  for (let i = 0; i < m; i += 1) {
    if (grid[i][0] === 1) continue;
    for (let j = 0; j < n; j += 1) {
      grid[i][j] = grid[i][j] === 0 ? 1 : 0;
    }
  }

  // flip columns that have zero counts more than ones
  for (let j = 1; j < n; j += 1) {
    let ones = 0;
    for (let i = 0; i < m; i += 1) ones += grid[i][j];
    if (ones<m/2) {
      for (let i = 0; i < m; i += 1) grid[i][j] = grid[i][j] === 0 ? 1 : 0;
    }
  }

  let score = 0;

  for (let i = 0; i < m; i += 1) {
    let rowVal = 0;
    for (let j = 0; j < n; j += 1) {
      rowVal = rowVal << 1 | grid[i][j];
    }
    score += rowVal;
  }

  return score;
};
