# https://leetcode.com/problems/palindrome-linked-list/ (top-interview-questions)

from typing import Optional

# Definition for singly-linked list.
class ListNode:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next

class Solution:
	def isPalindrome(self, head: Optional[ListNode]) -> bool:
		slow, fast = head, head

		# find the middle node
		while fast and fast.next:
			fast = fast.next.next
			slow = slow.next

		# reverse the second half
		palindrome = None
		while slow:
			next = slow.next
			slow.next = palindrome
			palindrome = slow
			slow = next

		# check if the values of the first half and
		# the second (after reversing it) are equal.
		while palindrome:
			if head.val != palindrome.val:
				return False
			head = head.next
			palindrome = palindrome.next
		return True