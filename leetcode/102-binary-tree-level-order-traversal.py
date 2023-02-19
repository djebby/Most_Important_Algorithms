# https://leetcode.com/problems/binary-tree-level-order-traversal/ (top-interview-questions)

# Definition for a binary tree node.
from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        values = list()
        queue = deque([root] if root else [])

        while queue:
            level_values = list()
            level_length = len(queue)
            for _ in range(level_length):
                node = queue.popleft()
                level_values.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            values.append(level_values)
        
        return values