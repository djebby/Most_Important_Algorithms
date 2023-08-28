# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/ (top-interview-questions)


from collections import deque
from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        values = []

        queue = deque([root] if root else [])
        
        while queue:
            level_values = []
            level_length = len(queue)
            for i in range(level_length):
                node = queue.popleft()
                level_values.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        
            values.append(level_values if len(values) % 2 == 0 else reversed(level_values))
        
        return values
