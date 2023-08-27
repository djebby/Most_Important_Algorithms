// https://leetcode.com/problems/binary-tree-level-order-traversal/ (top-interview-questions)

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const levels = [];
  const queue = root !== null ? [root] : [];
  
  while (queue.length > 0) {
    const levelLength = queue.length;
    levels.push([]);
    for (let i = 0; i < levelLength; i++) {
      const node = queue.pop();
      levels[levels.length - 1].push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }

  }

  return levels;

};
