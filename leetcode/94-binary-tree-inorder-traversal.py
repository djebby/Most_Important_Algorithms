# https://leetcode.com/problems/binary-tree-inorder-traversal/ (top-interview-questions)

from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        stack, values = list(), list()
        while stack or root:
            if root:
                stack.append(root)
                root = root.left
            else:
                root = stack.pop()
                values.append(root.val)
                root = root.right
        return values
    
    def inorder_traversal(self, root: Optional[TreeNode]) -> List[int]:
        stack, values = list(), list()
        while stack or root:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            values.append(root.val)
            root = root.right
        return values
    