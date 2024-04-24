// https://leetcode.com/problems/clone-graph/

// Definition for a Node.
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return;

  const valNodeMap = {};

  const dfs = (node) => {
    if (Object.hasOwn(valNodeMap, node.val)) return;
    valNodeMap[node.val] = node;
    for (const neighbor of node.neighbors) {
      dfs(neighbor);
    }
  }

  dfs(node);

  const valNodeMapCopy = {};
  for (const node in valNodeMap) {
    valNodeMapCopy[node] = new Node(Number(node));
  }

  for (const node in valNodeMap) {
    for (const neighbor of valNodeMap[node].neighbors) {
      valNodeMapCopy[node].neighbors.push(valNodeMapCopy[neighbor.val]);
    }
  }

  return valNodeMapCopy[1];
};
