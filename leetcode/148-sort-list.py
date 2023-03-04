# https://leetcode.com/problems/sort-list/ (top-interview-questions)

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        list_values = list()
        curr = head
        while curr:
            list_values.append(curr.val)
            curr = curr.next
        
        list_values.sort()

        curr = head
        for i in range(len(list_values)):
            curr.val = list_values[i]
            curr = curr.next
        
        return head