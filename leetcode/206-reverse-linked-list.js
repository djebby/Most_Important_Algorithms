// https://leetcode.com/problems/reverse-linked-list/ (top-interview-questions)

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  let prev = null; // previous node
  // head is the current node ( the middle node )
  let next; // next node
  while (head) {
    next = head.next;
    head.next = prev;
    // nodes update (shift to the right by one node)
    prev = head;
    head = next;
  }

  return prev;
};
