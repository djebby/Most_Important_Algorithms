# https://leetcode.com/problems/smallest-string-starting-from-leaf/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
        
        def dfs(node, path = []):
            if not node.left and not node.right:
                return path + [node.val]
            
            curr_path = path + [node.val]

            if node.left and node.right:
                return self.get_min(dfs(node.left, curr_path), dfs(node.right, curr_path))
            
            return dfs((node.right if node.right else node.left), curr_path)

        
        inverted_result = dfs(root)

        result = []

        for i in reversed(range(len(inverted_result))):
            result.append(chr(97 + inverted_result[i]))

        return "".join(result)

    def get_min(self, arr1, arr2):
        i = len(arr1) - 1
        j = len(arr2) - 1
        while i >= 0 and j >= 0:
            if arr1[i] < arr2[j]:
                return arr1
            elif arr2[j] < arr1[i]:
                return arr2
            i -= 1
            j -= 1
        
        return arr2 if j == -1 else arr1
