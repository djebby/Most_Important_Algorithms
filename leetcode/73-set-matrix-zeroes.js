// https://leetcode.com/problems/set-matrix-zeroes/ (top-interview-questions)


/** Space Complexity: O(n+m) 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = [];
  const cols = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rows.push(r);
        cols.push(c);
      }
    }
  }


  for (const row of rows) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[row][c] = 0;
    }
  }

  for (const col of cols) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][col] = 0;
    }
  }


};


/** Space Complexity: O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  /**
   * The main idea is to move the extra row and column of the O(m+n) Space solution
   * into our matrix first row and first column, so we use the first row and the first
   * column of our matrix to keep track of which rows and coluns need to be zeroed out
   */

  /**
   * matrix[0][0] will tell us if we should zeroed the first column
   * firstRow will tell us if we should zeroed the first row or not
   */
  let firstRow = false;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0; // mark this column to be zeroed
        // mark this row to be zeroed
        if (r === 0) {
          firstRow = true;
        } else {
          matrix[r][0] = 0;
        }
      }
    }
  }



  // zero out the marked column (except the first)
  for (let c = 1; c < matrix[0].length; c++) {
    if (matrix[0][c] === 0) {
      for (let r = 1; r < matrix.length; r++) {
        matrix[r][c] = 0;
      }
    }
  }

  // zero out the marked rows (except the first)
  for (let r = 1; r < matrix.length; r++) {
    if (matrix[r][0] === 0) {
      for (let c = 1; c < matrix[0].length; c++) {
        matrix[r][c] = 0;
      }
    }
  }


  // check if the first column should be zeroed
  if (matrix[0][0] === 0) {
    for (let i = 1; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  // check if the first row should be zeroed
  if (firstRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

};
