# https://leetcode.com/problems/range-sum-of-bst/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        # inorder traverse
        values_sum = 0
        stack = list()
        node = root
        while len(stack) > 0 or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            if node.val > high:
                break
            elif low <= node.val:
                values_sum += node.val
            if node.right: node = node.right

        return values_sum
