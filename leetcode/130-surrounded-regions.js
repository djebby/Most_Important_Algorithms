// https://leetcode.com/problems/surrounded-regions/ (top-interview-questions)

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

  const m = board.length;
  const n = board[0].length;


  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
                  //   down      up     right    left
  
  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;
    board[r][c] = 'U';
    for (const direction of directions) {
      dfs(r+direction[0], c+direction[1]);
    }
  }

  // mark the not surrounded regions with U insted of O...
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (r !== 0 && r !== (m-1) && c > 0 && c < (n-1)) continue;
      if (board[r][c] === 'O') {
        // spread around this 'O's region and mark it as unsurrounded
        dfs(r, c);
      }
    }
  }

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (board[r][c] === 'O') board[r][c] = 'X';
      else if (board[r][c] === 'U') board[r][c] = 'O';
    }
  }

};
