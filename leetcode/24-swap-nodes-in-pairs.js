// https://leetcode.com/problems/swap-nodes-in-pairs/


// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let dummy = new ListNode();

  // window of the swapping operation
  let node0 = dummy;
  let node1 = head;
  let node2 = head.next;
  let node3 = head.next.next;

  // node0 -> node1 -> node2 -> node3 : we need a window of the 4 nodes envolved in the swapping operation
  // the two swapped nodes (node1 and node2) + one node before (node0) and one node after (node3)
  // we should swap node1 and node2 and make node0.next pointes to node2

  while (node2) {

    node1.next = node3;
    node2.next = node1;
    node0.next = node2;

    // shift our window of 4 nodes
    node0 = node1;
    node1 = node3;
    node2 = node3 && node3.next;
    node3 = node2 && node2.next;

  }

  return dummy.next;
};