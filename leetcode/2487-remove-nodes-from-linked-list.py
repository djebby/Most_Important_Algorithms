# https://leetcode.com/problems/remove-nodes-from-linked-list/

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        monotonic_stack = []
        while head:
            while monotonic_stack and monotonic_stack[-1] < head.val:
                monotonic_stack.pop()
            monotonic_stack.append(head.val)
            head = head.next
        
        new_head = ListNode(monotonic_stack[0])
        
        curr = new_head
        for i in range(1, len(monotonic_stack), 1):
            curr.next = ListNode(monotonic_stack[i])
            curr = curr.next
        
        return new_head
