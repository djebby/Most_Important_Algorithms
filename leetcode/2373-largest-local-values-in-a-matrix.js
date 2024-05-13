// https://leetcode.com/problems/largest-local-values-in-a-matrix/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const n = grid.length;

  const answer = new Array(n-2);
  for (let i = 0; i < n-2; i += 1) answer[i] = new Array(n-2);  

  const moves = [[0, 0], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

  for (let i = 0; i < n-2; i += 1) {
    for (let j = 0; j < n-2; j += 1) {
      let max = -Infinity;
      for (const [dr, dc] of moves) {
        const r = i + 1 + dr;
        const c = j + 1 + dc;
        const cellVal = Math.min(r, c) >= 0 && Math.max(r, c) < n ? grid[r][c] : -Infinity;
        max = Math.max(max, cellVal);
      }
      answer[i][j] = max;
    }
  }


  return answer;
};
