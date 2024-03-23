// https://leetcode.com/problems/reorder-list/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

  // reverse the second half
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  let prev = null;
  let next;
  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // todo: merge the two halfs...
  let head2 = prev;
  while (head2) {
    const head2Next = head2.next;
    head2.next = head.next;
    head.next = head2;
    head = head.next.next;
    head2 = head2Next;
  }

  head.next = null;
};


/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderListOofN = function(head) {
  let fast = head;
  let slow = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  let nodeStack = []; // linked list second half nodes
  while (slow) {
    nodeStack.push(slow);
    slow = slow.next;
  }

  let curr = head;
  while (nodeStack.length > 0) {
    const node = nodeStack.pop();
    node.next = curr.next;
    curr.next = node;
    curr = curr.next.next;
  }

  curr.next = null;

  while(head) {
    console.log(head.val);
    head = head.next;
  }
};
