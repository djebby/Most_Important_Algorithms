# https://leetcode.com/problems/rotate-list/

from typing import Optional


# Definition for singly-linked list.
class ListNode:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next

class Solution:
	def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
		if head == None or head.next == None:
			return head

		n = 1 # linked list length
		tail = head
		while tail.next:
			n += 1
			tail = tail.next
		
		k %= n

		if k == 0:
			return head
		
		newTail = head
		newHead = head.next

		for _ in range(n - k - 1):
			newTail = newTail.next
			newHead = newHead.next
		
		newTail.next = None
		tail.next = head
		
		return newHead



	def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
		if head == None or head.next == None:
			return head

		values = list()
		curNode = head
		while curNode:
			values.append(curNode.val)
			curNode = curNode.next
		
		k %= len(values)

		if k > 0:
			values.reverse()
			l, r = 0, k-1
			while l < r:
				values[l], values[r] = values[r], values[l]
				l += 1
				r -= 1
			l, r = k, len(values) - 1
			while l < r:
				values[l], values[r] = values[r], values[l]
				l += 1
				r -= 1
		
		curNode = head
		for val in values:
			curNode.val = val
			curNode = curNode.next
		
		return head