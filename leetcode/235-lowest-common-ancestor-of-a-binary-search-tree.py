# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # base case : in a bst there is one and only one node as a lowest common ancestor... 
        if root.val >= min(p.val, q.val) and root.val <= max(p.val, q.val): return root

        if root.val < min(p.val, q.val): return self.lowestCommonAncestor(root.right, p, q)
        if root.val > max(p.val, q.val): return self.lowestCommonAncestor(root.left, p, q)
