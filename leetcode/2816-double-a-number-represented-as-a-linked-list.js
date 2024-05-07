// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
  let reversedListHead = reverseList(head);
  let curry = 0;
  let curr = reversedListHead;
  while (true) {
    const newVal = (curr.val * 2 + curry);
    curr.val = (newVal % 10);
    curry = Math.floor(newVal / 10);
    if (curr.next === null) break;
    curr = curr.next;
  }

  if (curry === 1) curr.next = new ListNode(1);
  return reverseList(reversedListHead);
};

const reverseList = (head) => {
  let node = head;
  prev = null;
  let next;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}