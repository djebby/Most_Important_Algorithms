// https://leetcode.com/problems/copy-list-with-random-pointer/ (top-interview-questions)

// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

  // create a mapping of original node to new node
  let map = new Map();
  let current = head;
  while (current) {
      map.set(current, new Node(current.val, null, null));
      current = current.next;
  }
  
  // set next and random pointers of new nodes
  current = head;
  while (current) {
      map.get(current).next = map.get(current.next);
      map.get(current).random = map.get(current.random);
      current = current.next;
  }
  
  return map.get(head);

};
