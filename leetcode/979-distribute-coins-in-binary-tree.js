// https://leetcode.com/problems/distribute-coins-in-binary-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  let minMoves = 0;
  const dfs = (node) => {
    if (!node) return [0, 0];
    const [leftSize, leftCoins] = dfs(node.left);
    const [rightSize, rightCoins] = dfs(node.right);
    const size = 1 + leftSize + rightSize;
    const coins = node.val + leftCoins + rightCoins;
    minMoves += Math.abs(size - coins); // Inequality between size and coins will create more required moves, either sending coins (coins > size) or receiving them (coins < size).
    return [size, coins];
  }

  dfs(root);
  return minMoves;
};

