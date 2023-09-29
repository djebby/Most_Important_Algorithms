// https://leetcode.com/problems/number-of-islands/ (top-interview-questions)

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
                  //   down      up     right    left

  const landToWater = function(r, c) {
    if (Math.min(r, c) < 0 || r >= m || c >= n || grid[r][c] === '0') {
      return;
    }

    grid[r][c] = '0';

    for (const [dr, dc] of directions) {
      landToWater(r+dr, c+dc);
    }
  }

  let islandsNumber = 0;

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (grid[r][c] === '1') {
        islandsNumber += 1;
        landToWater(r, c);
      }
    }
  }

  return islandsNumber;
};
