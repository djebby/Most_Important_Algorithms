// https://leetcode.com/problems/find-all-groups-of-farmland/

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
  const m = land.length;
  const n = land[0].length;
  const groupsCoordinations = [];

  const visited = new Set();
  const findBottomRight = (r, c) => {

    let right = c;
    while (right + 1 < n && land[r][right + 1] === 1) {
      right += 1;
    }

    let bottom = r;
    while (bottom + 1 < m && land[bottom + 1][right] === 1) {
      bottom += 1;
    }

    for (let i = r; i <= bottom; i += 1) {
      for (let j = c; j <= right; j += 1) {
        visited.add(`${i},${j}`);
      }
    }

    return [bottom, right];
  }

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (land[i][j] === 1 && !visited.has(`${i},${j}`)) {
        groupsCoordinations.push([i, j, ...findBottomRight(i, j)]);
      }
    }
  }

  return groupsCoordinations;
};
