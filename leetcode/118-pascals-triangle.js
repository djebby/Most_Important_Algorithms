// https://leetcode.com/problems/pascals-triangle/ (top-interview-questions)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const rows = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = new Array(i+1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = rows[i-1][j-1] + rows[i-1][j];
    }
    rows.push(row);
  }

  return rows;
};
