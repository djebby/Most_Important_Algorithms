// https://leetcode.com/problems/maximal-rectangle/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;


  const rectangleSize = (r, c) => {
    let maxSize = 0;
    let width = Infinity; // max width we can reach
    
    let i = r;
    while (i < rows && matrix[i][c] === '1') {
      let j = c;
      while (j < cols && matrix[i][++j] === '1');
      width = Math.min(width, (j - c));
      maxSize = Math.max(maxSize, width * ((i - r) + 1));
      i += 1;
    }

    return maxSize;
  }

  let size = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (matrix[i][j] === '1') size = Math.max(size, rectangleSize(i, j));
    }
  }

  return size;

};


