# https://leetcode.com/problems/leaf-similar-trees/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        
        leaf_values1 = self.get_leaf_values(root1)
        leaf_values2 = self.get_leaf_values(root2)
        
        # for i in range(max(len(leaf_values1), len(leaf_values2))):
        #     if len(leaf_values1) <= i or len(leaf_values2) <= i or leaf_values1[i] != leaf_values2[i]:
        #         return False
        # return True
        return leaf_values1 == leaf_values2


    def get_leaf_values(self, root:  Optional[TreeNode]):
        leaf_values = []

        stack = []
        while len(stack) > 0 or root:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            if root.left == None and root.right == None:
                leaf_values.append(root.val)
            
            root = root.right
        
        return leaf_values
