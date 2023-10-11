// https://leetcode.com/problems/palindrome-linked-list/ (top-interview-questions)


// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

  // get the middle node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  // reverse the linkedlist's second half 
  prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // palindrom checking...
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true;
};
