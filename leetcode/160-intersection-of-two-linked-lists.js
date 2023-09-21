// https://leetcode.com/problems/intersection-of-two-linked-lists/ (top-interview-questions)

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

  let tail = headA;
  while (tail.next) {
    tail = tail.next;
  }

  tail.next = headB;

  // cycle detection algorithm...
  let tortoise = headA;
  let hare = headA;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next?.next;
    if (tortoise === hare) break; 
  }

  // check if there is no cycle at all
  if (hare === null || hare.next === null) {
    tail.next = null;
    return null;
  }

  let tortoise2 = headA;

  while (tortoise != tortoise2) {
    tortoise = tortoise.next;
    tortoise2 = tortoise2.next;
  }

  tail.next = null;
  return tortoise;

};
