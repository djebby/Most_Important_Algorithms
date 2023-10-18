// https://leetcode.com/problems/search-a-2d-matrix-ii/ (top-interview-questions)

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  if (target < matrix[0][0] || matrix[m-1][n-1] < target) {
    return false;
  }

  let r = m - 1;
  let c = 0;
  while (r >= 0 && c < n) {
    if (target < matrix[r][c]) {
      r -= 1;
    } else if (target > matrix[r][c]) {
      c += 1;
    } else {
      return true;
    }
  }

  return false;
};
