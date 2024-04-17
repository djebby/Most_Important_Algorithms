// https://leetcode.com/problems/smallest-string-starting-from-leaf/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  const getMin = (arr1, arr2) => {
    let i = arr1.length - 1;
    let j = arr2.length - 1;

    while (i >= 0 && j >= 0) {
      if (arr1[i] < arr2[j]) return arr1;
      else if (arr1[i] > arr2[j]) return arr2;
      i -= 1;
      j -= 1;
    }

    return j === -1 ? arr2 : arr1;
  }
  
  const dfs = (node, path = []) => {
    if (!node.left && !node.right) return [...path, node.val];

    const currPath = [...path, node.val];
    if (node.left && node.right) return getMin(dfs(node.left, currPath), dfs(node.right, currPath));
    return dfs((node.left || node.right), currPath);
  }

  const result = dfs(root);

  const resultChar = [];

  for (let i = result.length - 1; i >= 0; i -= 1) {
    resultChar.push(String.fromCharCode(97 + result[i]))
  }
  
  return resultChar.join('');
};
