# https://leetcode.com/problems/linked-list-cycle/ (top-interview-questions)

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        tortoise, hare = head, head.next.next if (head and head.next) else None
        while hare is not None:
            if tortoise == hare: return True
            tortoise = tortoise.next
            hare = hare.next.next if hare.next else None
        return False

# floyd's tortoise and hare algorithm (cycle detection)