public class SwapNodesInPairs24 {
	public ListNode swapPairs(ListNode head) {
		return this.helper(head);
	}

	private ListNode helper(ListNode head) {
		if(head == null || head.next == null) {
			return head;
		}
		ListNode secondNode = head.next;
		head.next = this.helper(head.next.next);
		secondNode.next = head;
		return secondNode;
	}
}


class ListNode {
	int val;
	ListNode next;
	ListNode() {}
	ListNode(int val) { this.val = val; }
	ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}