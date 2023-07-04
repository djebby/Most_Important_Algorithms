/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let node1 = l1;
	let node2 = l2;
	let carray = 0;
	let sumList = new ListNode();
	let node3 = sumList;
	while (node1 || node2 || carray > 0) {
		const sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + carray;
		node3.next = new ListNode(sum % 10, undefined);
		carray = sum > 9 ? 1 : 0;
		node1 = node1 && node1.next;
		node2 = node2 && node2.next;
		node3 = node3.next;
	}

	return sumList.next;
};