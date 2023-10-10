// https://leetcode.com/problems/kth-smallest-element-in-a-bst/ (top-interview-questions)

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let visited = 0;

  let stack = [];
  let node = root;
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    visited += 1;
    if (visited === k) {
      return node.val;
    }
    node = node.right;
  }

};
