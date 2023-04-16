
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/ (top-interview-questions)
public class RemoveNthNodeFromEndOfList19 {
	public ListNode removeNthFromEnd(ListNode head, int n) {
		
		ListNode dummy = new ListNode(0, head);
		ListNode preRemovedNode = dummy;
		ListNode tail = head;

		while(n > 0) {
			tail = tail.next;
			n--;
		}

		while(tail != null) {
			preRemovedNode = preRemovedNode.next;
			tail = tail.next;
		}

		preRemovedNode.next = preRemovedNode.next.next;

		return dummy.next;

	}
}


class ListNode {
	int val;
	ListNode next;
	ListNode() {}
	ListNode(int val) { this.val = val; }
	ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}