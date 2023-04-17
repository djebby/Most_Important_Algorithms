# https://leetcode.com/problems/swap-nodes-in-pairs/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next

class Solution:
	def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
		"""
		Time Complexity : O(n)
		Space Complexity: O(1)
		"""
		if head == None or head.next == None:
			return head

		dummy = ListNode(0, head)

		first, second, third = dummy, head, head.next

		while third:
			# node swapping
			next = third.next
			third.next = second
			second.next = next
			first.next = third
			# pointer update
			first = first.next.next
			second = next
			third = next.next if next else None
		
		return dummy.next



	def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:

		def helper(node):
			if node == None or node.next == None:
				return node
			second = node.next
			node.next = helper(second.next)
			second.next = node
			return second

		return helper(head)



	def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
		"""
		Time Complexity : O(n)
		Space Complexity: O(n)
		"""
		if head == None or head.next == None:
			return head
		
		values = list()
		curr = head
		while curr:
			values.append(curr.val)
			curr = curr.next
			if len(values) % 2 == 0:
				values[-2], values[-1] = values[-1], values[-2]

		
		def listBuilder(index):
			if index >= len(values):
				return None
			swapedList = ListNode(values[index])
			swapedList.next = listBuilder(index+1)
			return swapedList

		return listBuilder(0)