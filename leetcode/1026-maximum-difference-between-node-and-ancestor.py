# https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode], _min = float('inf'), _max = float('-inf')) -> int:

        if root == None:
            return float('-inf')
        
        # update the maximum and the minimum node values seen so far in this path.
        _max = max(_max, root.val)
        _min = min(_min, root.val)

        left_max_diff = self.maxAncestorDiff(root.left, _min, _max)
        right_max_diff = self.maxAncestorDiff(root.right, _min, _max)

        # compare between the current max difference and the max differences comming from the left and the right subtrees.
        return max((_max - _min), left_max_diff, right_max_diff)

        """
        def dfs(node, anc_vals):
            if not node:
                return 0

            anc_vals.append(node.val)

            max_anc_diff = 0
            for anc_val in anc_vals:
                max_anc_diff = max(max_anc_diff, abs(anc_val - node.val))
            
            
            max_anc_diff = max(max_anc_diff, dfs(node.left, anc_vals), dfs(node.right, anc_vals))
            anc_vals.pop()
            return max_anc_diff

        return dfs(root, [])
        """
