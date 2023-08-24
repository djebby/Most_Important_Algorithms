# https://leetcode.com/problems/validate-binary-search-tree/ (top-interview-questions)

from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    # run inorder traverse and check if the values are sorted
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        values_inorder = list()
        stack = list()
        node = root

        while stack or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            values_inorder.append(node.val)
            node = node.right
        
        for i in range(1, len(values_inorder)):
            if values_inorder[i-1] >= values_inorder[i]:
                return False
        
        return True
    


    def is_valid_bst(self, root: Optional[TreeNode], low=(-2)**31-1, high=(2**31)) -> bool:
        if not root: 
            return True
        if root.val <= low or root.val >= high:
            return False

        return (self.is_valid_bst(root.left, low, root.val) and self.is_valid_bst(root.right, root.val, high))
