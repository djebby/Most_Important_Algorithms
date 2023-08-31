# https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ (top-interview-questions)

from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        
        def buildBST(l, r, nums):
            if l > r: return None
            m = (l+r) // 2
            bst = TreeNode(nums[m])
            bst.left = buildBST(l, m-1, nums)
            bst.right = buildBST(m+1, r, nums)
            return bst
        return buildBST(0, len(nums)-1, nums)
