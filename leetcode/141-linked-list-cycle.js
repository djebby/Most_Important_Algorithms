// https://leetcode.com/problems/linked-list-cycle/ (top-interview-questions)


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  
  let tortoise = head;
  let hare = head.next.next;

  while (hare) {
    if (hare === tortoise) return true;
    tortoise = tortoise.next;
    hare = hare.next?.next;
  }

  return false;
};

// bad solution with O(n) space complexity
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  
  const nodes = new Set();
  
  let node = head;

  while (node) {
    nodes.add(node);
    if (nodes.has(node.next)) return true;
    node = node.next;
  }

  return false;
}
