// https://leetcode.com/problems/binary-tree-inorder-traversal/ (top-interview-questions)


// Definition for a binary tree node.
function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  
  const values = [];
  const stack = [];

  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      values.push(root.val);
      root = root.right;
    }
  }

  return values;

};
