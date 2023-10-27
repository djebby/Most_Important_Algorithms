// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/ (top-interview-questions)


// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) return 'n'; // n to say null
  return root.val+ ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  
  const preOrderValues = data.split(',');
  let i = 0;

  var treeBuilder = function() {
    const rootVal = preOrderValues[i++];
    
    if (rootVal === 'n') {
      return null;
    };

    const root = new TreeNode(Number(rootVal));
    root.left = treeBuilder();
    root.right = treeBuilder();
    return root;
  }

  return treeBuilder();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
