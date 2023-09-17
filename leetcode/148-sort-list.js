// https://leetcode.com/problems/sort-list/ (top-interview-questions)


// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  let values = [];
  let curr = head;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  values.sort((a, b) => (a - b));

  curr = head;
  for (const val of values) {
    curr.val = val;
    curr = curr.next;
  }

  return head;

}
