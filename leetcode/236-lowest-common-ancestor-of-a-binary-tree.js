// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ (top-interview-questions)

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  // base case
  if (root === p || root === q || root === null) { 
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left === null) return right; //  left side return null => forward up the result of the right side
  if (right === null) return left; //  right side return null => forward up the result of the left side 
  return root; // both sides return results => so this node is the lowest common ancestor forward it up
};
