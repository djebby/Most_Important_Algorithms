
// 2 - https://leetcode.com/problems/add-two-numbers/ (top-interview-questions)

public class AddTwoNumbers2 {

	public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
		ListNode sumList = new ListNode();
		ListNode curr = sumList;
		int carray = 0;

		while(l1 != null || l2 != null || carray != 0) {
			int digit1 = l1 != null ? l1.val : 0;
			int digit2 = l2 != null ? l2.val : 0;
			int sum = digit1 + digit2 + carray;
			carray = sum > 9 ? 1 : 0;
			
			curr.next = new ListNode(sum % 10);
			curr = curr.next;

			l1 = l1 != null ? l1.next : null;
			l2 = l2 != null ? l2.next : null;

		}

		return sumList.next;
	}
}

class ListNode {
	int val;
	ListNode next;
	ListNode() {}
	ListNode(int val) { this.val = val; }
	ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}