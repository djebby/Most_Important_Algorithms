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
      boardsConfig.push([...board]);
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
  
  return boardsConfigStringify(boardsConfig);
};

const boardsConfigStringify = (boardsConfig) => {
  if (boardsConfig.length === 0) return [];

  const n = boardsConfig[0].length;
  const stringifiedBoardsConfig = [];

  for (const boardConfig of boardsConfig) {
    stringifiedBoardsConfig.push(boardConfig.map(queenPlace => {
      return '.'.repeat(queenPlace) + 'Q' + '.'.repeat(n-queenPlace-1);
    }));
  }

  return stringifiedBoardsConfig;
}
