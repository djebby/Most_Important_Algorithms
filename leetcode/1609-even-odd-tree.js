// https://leetcode.com/problems/even-odd-tree/

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
var isEvenOddTree = function(root) {
  let isEvenLevel = true;
  const queue = [[root]];
  while (queue.length > 0) {
    const level = queue.pop();
    const levelLength = level.length;
    const nextLevel = [];
    for (let i = 0; i < levelLength; i += 1) {
      // validate the current level and build the next level
      if (isEvenLevel && ((level[i].val % 2 === 0) || (level[i].val >= (i < levelLength - 1 ? level[i+1].val : +Infinity))))
        return false;
      if (!isEvenLevel && ((level[i].val % 2 === 1) || (level[i].val <= ((i < levelLength - 1) ? level[i+1].val : -Infinity))))
        return false;

      if (level[i].left) nextLevel.push(level[i].left);
      if (level[i].right) nextLevel.push(level[i].right);

    }

    isEvenLevel = !isEvenLevel;

    if (nextLevel.length > 0) queue.unshift(nextLevel);
  }

  return true;
};
