

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // follow up: could you do this in one pass ?
  
  let dummy = new ListNode(0, head);
  let preRemovedNode = dummy;
  let tail = head;

  while (n > 0) {
    tail = tail.next;
    n -= 1;
  }

  while (tail) {
    preRemovedNode = preRemovedNode.next;
    tail = tail.next;
  }

  preRemovedNode.next = preRemovedNode.next.next;
  return dummy.next;
};