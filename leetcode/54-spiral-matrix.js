// https://leetcode.com/problems/spiral-matrix/ (top-interview-questions)

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  
  const result = [];

  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {

    // 1) top left -> top right : go right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;

    // 2) top right -> bottom right : go down
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    if (top > bottom || left > right) break;

    // 3) bottom right -> bottom left : go left
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom -= 1;

    // 4) bottom left -> top left : go up
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left += 1;

  }

  return result;

};
