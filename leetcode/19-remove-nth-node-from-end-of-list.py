# https://leetcode.com/problems/remove-nth-node-from-end-of-list/ (top-interview-questions)


from typing import Optional

# Definition for singly-linked list.
class ListNode:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next


class Solution:
	def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
		dummy = ListNode(None, head)
		pre_removed_node = dummy
		tail = head
		
		while n:
			tail = tail.next
			n -= 1
		# update our pointers to their exact nodes
		while tail:
			pre_removed_node = pre_removed_node.next
			tail = tail.next
		
		# remove the nth node from the linked list
		pre_removed_node.next = pre_removed_node.next.next

		return dummy.next