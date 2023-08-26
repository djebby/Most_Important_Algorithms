// https://leetcode.com/problems/symmetric-tree/ (top-interview-questions)


// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

  const helper = (lNode, rNode) => {
    if (lNode === null && rNode === null) {
      return true;
    }

    if (lNode === null || rNode === null) {
      return false;
    }

    return (lNode.val === rNode.val) && helper(lNode.left, rNode.right) && helper(lNode.right, rNode.left); 
  }

  return helper(root.left, root.right);
};
