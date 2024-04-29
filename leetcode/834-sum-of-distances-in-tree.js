// https://leetcode.com/problems/sum-of-distances-in-tree/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {

  let answer = new Array(n).fill(0), count = new Array(n).fill(1), gr = { 0: [] };
  

  for (const [a, b] of edges) {
    if (!Object.hasOwn(gr, a)) gr[a] = [];
    if (!Object.hasOwn(gr, b)) gr[b] = [];
    gr[a].push(b);
    gr[b].push(a);
  }

  const useChildToCountParent = (node, parent) => {
    for (const child of gr[node]) {
      if (child === parent) continue;
      useChildToCountParent(child, node);
      count[node] += count[child];
      answer[node] += (answer[child] + count[child]);
    }
  }


  const countNodesAnswer = (node, parent) => {
    for (const child of gr[node]) {
      if (child === parent) continue;
      answer[child] = answer[node] - count[child] + n - count[child];
      countNodesAnswer(child, node);
    }
  }

  useChildToCountParent(0, null);
  countNodesAnswer(0, null);

  return answer;
};
