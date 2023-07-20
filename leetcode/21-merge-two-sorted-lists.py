# https://leetcode.com/problems/merge-two-sorted-lists/ (top-interview-questions)

from typing import Optional


# Definition for singly-linked list.
class ListNode:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next

class Solution:
	def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
		if not list1: return list2
		if not list2: return list1
		
		curr1, curr2 = list1, list2
		while curr1 and curr2:
			if curr1.val <= curr2.val:
				next = curr1.next
				if not next or curr2.val < next.val: curr1.next = curr2
				curr1 = next
			else:
				next = curr2.next
				if not next or curr1.val <= next.val: curr2.next = curr1
				curr2 = next

		return list1 if list1 and list1.val <= list2.val else list2
		

	def mergeTwoListsSolution2(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
		newList = ListNode()
		tail = newList
		
		while list1 and list2:
			if list1.val < list2.val:
				tail.next = list1
				list1 = list1.next
			else:
				tail.next = list2
				list2 = list2.next
			tail = tail.next
			
		if list1: tail.next = list1
		elif list2: tail.next = list2

		return newList.next