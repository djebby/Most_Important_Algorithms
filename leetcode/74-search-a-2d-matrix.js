// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  let m = matrix.length;
  let n = matrix[0].length;

  let top = 0; // top row pointer
  let bottom = m - 1; // bottom row pointer

  while (top <= bottom) {
    // try to identify the row that should contain the target (if it exist)

    const vMid = top + Math.floor((bottom - top) / 2); // vertical middle

    if (matrix[vMid][0] <= target && target <= matrix[vMid][n-1]) {
      // if target value exist it should be in this row ( matrix[vMid] )
      let left = 0;
      let right = n - 1;

      while (left <= right) {
        const hMid = left + Math.floor((right - left) / 2); // horizantal middle
        if (target === matrix[vMid][hMid]) {
          return true;
        } else if (target > matrix[vMid][hMid]) {
          left = hMid + 1;
        } else {
          right = hMid - 1;
        }
      }

      // at this point the target does not exist we should break the outer loop 
      // ( if we don't we will stack in an infinite loop )
      break;
      
    } else if ( matrix[vMid][n-1] < target ) {
      top = vMid + 1;
    } else {
      bottom = vMid - 1;
    }
  }

  return false;

};
