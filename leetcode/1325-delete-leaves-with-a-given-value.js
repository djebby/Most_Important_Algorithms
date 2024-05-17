// https://leetcode.com/problems/delete-leaves-with-a-given-value/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  
  const dfs = (node) => {
    if (!node) return true;

    const left = dfs(node.left);
    const right = dfs(node.right);
    if (left) node.left = null;
    if (right) node.right = null;
    if (left && right && node.val === target) return true;

    return false;
  }


  return dfs(root) ? null : root;
};
