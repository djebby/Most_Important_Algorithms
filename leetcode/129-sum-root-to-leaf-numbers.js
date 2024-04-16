// https://leetcode.com/problems/sum-root-to-leaf-numbers/

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
var sumNumbers = function(root, numbers = 0) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return (numbers * 10) + root.val;
  }

  numbers = (numbers * 10) + root.val;

  return sumNumbers(root.left, numbers) + sumNumbers(root.right, numbers);
};
