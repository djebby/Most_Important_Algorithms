// https://leetcode.com/problems/validate-binary-search-tree/ (top-interview-questions)


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
var isValidBST = function(root) {

  function validation(node, max, min) {
    if(node == null)
        return true;
    if(node.val <= min || node.val >= max)
        return false;
    
    return validation(node.left, node.val, min) && validation(node.right, max, node.val);
  }
  
  return validation(root, Infinity, -Infinity);
};
