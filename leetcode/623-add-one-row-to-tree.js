// https://leetcode.com/problems/add-one-row-to-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth === 1) return new TreeNode(val, root);

  const dfs = (node, currDepth = 1) => {
    if(!node) return;
    if (currDepth === depth - 1) {
      const leftTreeNode = new TreeNode(val, node.left);
      const rightTreeNode = new TreeNode(val, null, node.right);
      node.left = leftTreeNode;
      node.right = rightTreeNode;
      return;
    }

    dfs(node.left, currDepth + 1);
    dfs(node.right, currDepth + 1);
  }

  dfs(root);
  return root;
};
