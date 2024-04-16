# https://leetcode.com/problems/sum-root-to-leaf-numbers/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sumNumbers(self, root: Optional[TreeNode], numbers = 0) -> int:
        if not root: return 0
        if not root.left and not root.right:
            return (numbers * 10) + root.val

        numbers = (numbers * 10) + root.val

        return self.sumNumbers(root.left, numbers) + self.sumNumbers(root.right, numbers)
