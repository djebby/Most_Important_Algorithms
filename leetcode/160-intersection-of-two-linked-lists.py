# https://leetcode.com/problems/intersection-of-two-linked-lists/ (top-interview-questions)

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        tail = headA
        while tail.next: tail = tail.next
        tail.next = headA
        slow, fast = headB, headB
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if slow is fast: break

        if fast is None or fast.next is None:
            tail.next = None
            return None

        slow2 = headB
        while slow != slow2:
            slow = slow.next
            slow2 = slow2.next
        tail.next = None
        return slow
