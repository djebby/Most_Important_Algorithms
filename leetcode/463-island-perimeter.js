// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  
  const rows = grid.length;
  const cols = grid[0].length;

  let perimeter = 0;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (grid[i][j] === 0) continue;

      if (i === 0 || grid[i-1][j] === 0) perimeter += 1;
      if (j === cols - 1 || grid[i][j+1] === 0) perimeter += 1;
      if (i === rows - 1 || grid[i+1][j] === 0) perimeter += 1;
      if (j === 0 || grid[i][j-1] === 0) perimeter += 1;
    }
  }

  return perimeter; 
};
