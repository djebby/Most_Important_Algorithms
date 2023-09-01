// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/ (top-interview-questions)

// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};


/** constant extra space solution
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

  let node = root;
  let nextLevelStart = root !== null ? root.left : null;

  while (nextLevelStart !== null) {
    
    // left -> right
    node.left.next = node.right;

    if (node.next !== null) {
      // right -> left ( of the parent neighboor node )
      node.right.next = node.next.left;
      node = node.next;
    } else {
      // we reach the end of the current level we must go to the start node of the next level
      node = nextLevelStart;
      nextLevelStart = nextLevelStart.left;
    }

  }

  return root;

};



/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const levels = [];
  const queue = root !== null ? [root] : [];

  while (queue.length > 0) {
    levels.push([]);
    let levelLength = queue.length;
    while (levelLength > 0) {
      const node = queue.pop();
      levels[levels.length - 1].push(node);
      if(node.left) queue.unshift(node.left);
      if(node.right) queue.unshift(node.right);
      levelLength -= 1;
    }
  }

  for (const level of levels) {
    for (let i = 0; i < level.length - 1; i++) {
      level[i].next = level[i+1];
    }
  }

  return root;
};
