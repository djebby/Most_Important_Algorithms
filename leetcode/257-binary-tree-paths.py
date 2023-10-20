# https://leetcode.com/problems/binary-tree-paths/

from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        paths = list()
 
        def backtracking(node, path):
            if node.left == None and node.right == None:
                paths.append(path+str(node.val))
                return
            if node.left:
                backtracking(node.left, path+str(node.val)+"->")
            if node.right:
                backtracking(node.right, path+str(node.val)+"->")
      
        backtracking(root, "")

        return paths
