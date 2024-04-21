// https://leetcode.com/problems/find-if-path-exists-in-graph/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const adjList = {};
  for (let i = 0; i < n; i += 1) {
    adjList[i] = [];
  }

  for (let [src, dest] of edges) {
    adjList[src].push(dest);
    adjList[dest].push(src);
  }


  const visited = new Set();
  const dfs = (vertex) => {
    if (visited.has(vertex)) return false;
    if (vertex === destination) return true;

    visited.add(vertex);
    for (let neighboor of adjList[vertex]) {
      if (dfs(neighboor)) return true;
    }

    return false;
  }

  return dfs(source);
};
