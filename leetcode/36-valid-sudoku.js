// https://leetcode.com/problems/valid-sudoku/ (top-interview-questions)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = {};
  const cols = {};
  const subBoxes = {};

  for(let i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      subBoxes[i+''+j] = new Set();
    }
  }


  let digit;
  let row;
  let col;
  let subBox;

  for (let r = 0; r < 9; r++) {
    row = rows[r];
    for (let c = 0; c < 9; c++) {
      digit = board[r][c];
      if (digit === '.') continue;
      col = cols[c];
      subBox = subBoxes[Math.floor(r/3)+''+Math.floor(c/3)];
      if (row.has(digit) || col.has(digit) || subBox.has(digit)) {
        return false;
      }
      row.add(digit);
      col.add(digit);
      subBox.add(digit);
    }
  }

  return true;
};