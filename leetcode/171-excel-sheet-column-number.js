// https://leetcode.com/problems/excel-sheet-column-number/ (top-interview-questions)

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  
  let number = 0;

  for (let i = 0; i < columnTitle.length; i += 1) {
    number += (columnTitle.charCodeAt(i) - 64) * (26 ** (columnTitle.length - 1 - i));
  }

  return number;
};
