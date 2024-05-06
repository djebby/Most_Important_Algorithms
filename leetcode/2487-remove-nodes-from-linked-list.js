// https://leetcode.com/problems/remove-nodes-from-linked-list/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
  const monotonicStack = [];

  while (head) {
    while (monotonicStack.length > 0 && monotonicStack[monotonicStack.length - 1] < head.val) {
      monotonicStack.pop();
    }
    monotonicStack.push(head.val);
    head = head.next;
  }

  const newHead = new ListNode(monotonicStack[0]);

  let curr = newHead;
  for (let i = 1; i < monotonicStack.length; i += 1) {
    curr.next = new ListNode(monotonicStack[i]);
    curr = curr.next;
  }

  return newHead;
};
