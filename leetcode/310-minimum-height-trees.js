// https://leetcode.com/problems/minimum-height-trees/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0];
  
  const adjList = {};
  for (let node = 0; node < n; node += 1) adjList[node] = [];
  for (const [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  // define the leaf nodes and push them in a queue, keep tracking of the edges count of each node
  const queue = [];
  const edgesCount = {};
  for (let node = 0; node < n; node += 1) {
    if (adjList[node].length === 1) queue.push(node);
    edgesCount[node] = adjList[node].length;
  }

  // keep deleting of the outer layer (leaf nodes) until we have less or equal to 2 nodes
  while (n > 2) {
    let layerLength = queue.length;
    while (layerLength > 0) {
      const node = queue.shift();
      for (const neighbor of adjList[node]) {
        /* 
        * one of the neighbors of this leaf node is a parent node we need to decrement his (the parent) edges count by one
        * until hi lost all edges between him and his child leaf nodes so the only edge that he have is one with his parent
        * and by so he became a new leaf node.
        */
        edgesCount[neighbor] -= 1;
        if (edgesCount[neighbor] === 1) queue.push(neighbor);
      }
      layerLength -= 1; // one leaf node less 
      n -= 1; // one node less in the total graph/tree nodes
    }
  }

  return queue;
};
