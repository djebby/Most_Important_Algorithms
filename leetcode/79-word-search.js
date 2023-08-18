// https://leetcode.com/problems/word-search/ (top-interview-questions)

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;
  // edge case
  if (word.length > ROWS*COLS) return false;

  const visited = new Set();
  const backtrack = (r, c, i) => {
    if (i === word.length) {
      return true;
    }

    const key = r + ',' + c;

    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || word[i] !== board[r][c] || visited.has(key)) {
      return false;
    }

    visited.add(key);
    const result = backtrack(r+1, c, i+1) || backtrack(r, c+1, i+1) || backtrack(r-1, c, i+1) || backtrack(r, c-1, i+1);
    visited.delete(key);
    return result;
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (backtrack(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
