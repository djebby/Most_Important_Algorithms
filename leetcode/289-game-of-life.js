// https://leetcode.com/problems/game-of-life/ (top-interview-questions)



// live => die if: fewer than two live neighbors (under-population) or with greater than three live neighbors (over-population)
// live => live if: two or three live neighbors stay lives
// die => live if: exactly three live neighbors (reproduction)


/** Space: O(1)
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

  // stay dead decoded to    : 0
  // live to dead decoded to : 1
  // dead to live decoded to : 2
  // stay live decoded to    : 3

  const m = board.length;
  const n = board[0].length;

  const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const getLiveNeighborsCount = (r, c) => {
    let livedNeiCnt = 0; // lived neighbors count
    for (const [dr, dc] of neighbors) {
      if (Math.min(r+dr, c+dc) < 0 || r+dr >= m || c+dc >= n) {
        continue;
      }
      if (board[(r+dr)][(c+dc)] === 1 || board[(r+dr)][(c+dc)] === 3) livedNeiCnt += 1;
    }

    return livedNeiCnt;
  }

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      const livedNeiCnt = getLiveNeighborsCount(r, c);
      if (board[r][c] === 1) {
        if (livedNeiCnt === 2 || livedNeiCnt === 3) board[r][c] = 3; // live to live (3)
        else board[r][c] = 1; // live to dead (1)
      } else if (livedNeiCnt === 3) { // (board[r][c] === 0) && (livedNeiCnt === 3)
        board[r][c] = 2; // dead to live (2)
      }
    }
  }

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (board[r][c] < 2) {
        board[r][c] = 0;
      } else {
        board[r][c] = 1;
      }
    }
  }

}



var gameOfLife = function(board) {
  // stay dead decoded to    : 'dd'
  // live to dead decoded to : 'ld'
  // dead to live decoded to : 'dl'
  // stay live decoded to    : 'll'

  const m = board.length;
  const n = board[0].length;

  const liveSet = new Set(['ld', 'll']);
  const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const getLiveNeighborsCount = (r, c) => {
    let livedNeiCnt = 0; // lived neighbors count
    for (const [dr, dc] of neighbors) {
      if (Math.min(r+dr, c+dc) < 0 || r+dr >= m || c+dc >= n) {
        continue;
      }
      if (board[(r+dr)][(c+dc)] === 1 || liveSet.has(board[(r+dr)][(c+dc)])) livedNeiCnt += 1;
    }

    return livedNeiCnt;
  }

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      const livedNeiCnt = getLiveNeighborsCount(r, c);
      if (board[r][c] === 1) {
        if (livedNeiCnt === 2 || livedNeiCnt === 3) board[r][c] = 'll'; // live to live
        else board[r][c] = 'ld'; // live to dead
      } else { // (board[r][c] === 0) && (livedNeiCnt === 3)
        if (livedNeiCnt === 3) board[r][c] = 'dl'; // dead to live
        else board[r][c] = 'dd'; // dead to dead 
      }
    }
  }

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (board[r][c].charAt(1) === 'd') {
        board[r][c] = 0;
      } else { // board[r][c].charAt(1) === 'l'
        board[r][c] = 1;
      }
    }
  }
};


/** Space: O(n)
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife01 = function(board) {
  const m = board.length;
  const n = board[0].length;
  const celleState = {};

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      celleState[r+','+c] = board[r][c];
    }
  }

  const getLiveNeighborsCount = (r, c) => {
    const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let livedNeiCnt = 0; // lived neighbors count
    for (const [dr, dc] of neighbors) {
      if (Math.min(r+dr, c+dc) < 0 || r+dr >= m || c+dc >= n) {
        continue;
      }
      if (celleState[(r+dr) + ',' + (c+dc)] === 1) livedNeiCnt += 1;
    }

    return livedNeiCnt;
  }

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      const livedNeiCnt = getLiveNeighborsCount(r, c);
      if (board[r][c] === 1 && (livedNeiCnt < 2 || livedNeiCnt > 3)) {
        board[r][c] = 0;
      } else if (board[r][c] === 0 && livedNeiCnt === 3) {
        board[r][c] = 1;
      }
    }
  }
};
