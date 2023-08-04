// https://leetcode.com/problems/rotate-list/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  
  if (head === null || head.next === null) {
    return head;
  }

  // get the length of the linked list
  let n = 1;
  let tail = head;
  while (tail.next) {
    n += 1;
    tail = tail.next;
  }

  k %= n;

  if (k === 0) return head;

  let newTail = head;
  let newHead = head.next;

  for (let i = 0; i < n - k - 1; i++) {
    newTail = newTail.next;
    newHead = newHead.next;
  }

  newTail.next = null;
  tail.next = head;

  return newHead;

};
