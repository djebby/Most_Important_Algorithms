# https://leetcode.com/problems/kth-smallest-element-in-a-bst/ (top-interview-questions)

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        stack = list()
        node = root
        counter = 0 # number of processed nodes
        while stack or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            counter += 1
            if counter == k:
                return node.val
            node = node.right
