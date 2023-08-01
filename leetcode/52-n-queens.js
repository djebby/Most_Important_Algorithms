// https://leetcode.com/problems/n-queens/


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const boardsConfig = [];

  const takenCols = new Set();
  const takenPositivDiag = new Set();
  const takenNegativeDiag = new Set();

  const board = [];

  const backtracking = (row) => {
    if (row === n) {
      // base case ( new valid board config found ) ...
      const boardConfig = [];

      for (const queenPlace of board) {
        boardConfig.push('.'.repeat(queenPlace) + 'Q' + '.'.repeat(n-queenPlace-1));
      }

      boardsConfig.push(boardConfig);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (takenCols.has(i) || takenPositivDiag.has(row-i) || takenNegativeDiag.has(row+i)) continue;
      board.push(i);
      takenCols.add(i);
      takenPositivDiag.add(row-i);
      takenNegativeDiag.add(row+i);
      backtracking(row+1);
      board.pop();
      takenCols.delete(i);
      takenPositivDiag.delete(row-i);
      takenNegativeDiag.delete(row+i);
    }
  }

  backtracking(0);
  
  return boardsConfig;
};


console.log(solveNQueens(4));
