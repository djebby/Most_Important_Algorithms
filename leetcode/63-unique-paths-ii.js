// https://leetcode.com/problems/unique-paths-ii

/** bottom-up approach (tabulation)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  
  // base case, the bottom-right corner is an obstacle
  if (obstacleGrid[m-1][n-1] === 1) return 0;


  obstacleGrid[m-1][n-1] = 1;

  for (let r = m - 1; r >= 0; r -= 1) {
    for (let c = n - 1; c >= 0; c -= 1) {
      
      if (r === m-1 && c === n-1) continue;

      if (obstacleGrid[r][c] === 1) {
        obstacleGrid[r][c] = 0;
      } else {
        obstacleGrid[r][c] = (r+1 === m ? 0 : obstacleGrid[r+1][c]) + (c+1 === n ? 0 : obstacleGrid[r][c+1]);
      }
    }
  }

  return obstacleGrid[0][0];
  
};


/** top-down approach (memoization)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles2 = function(obstacleGrid) {

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  
  // base case, the bottom-right corner is an obstacle
  if (obstacleGrid[m-1][n-1] === 1) return 0;

  const memo = {};
  const dfs = (r = 0, c = 0) => {
    if (r === m || c === n || obstacleGrid[r][c] === 1) {
      return 0;
    }

    if (r === m-1 && c === n-1) {
      return 1;
    }

    const key = r + ',' + c;

    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    const pathNums = dfs(r+1, c) + dfs(r, c+1);
    memo[key] = pathNums;

    return pathNums;
  }

  return dfs();

};
