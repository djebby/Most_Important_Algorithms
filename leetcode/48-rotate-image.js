/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  transpose(matrix);
  reverseRows(matrix);
  
};

const transpose = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
};

const reverseRows = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [matrix[i][matrix.length - 1 - j], matrix[i][j]]
    }
  }
};