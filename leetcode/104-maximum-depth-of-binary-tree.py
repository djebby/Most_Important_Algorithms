# https://leetcode.com/problems/maximum-depth-of-binary-tree/ (top-interview-questions)

from typing import Optional
from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth00(self, root: Optional[TreeNode]) -> int: # recursive dfs solution
        def depthfirst(node, depth):
            if node is None: return depth
            return max(depthfirst(node.left, depth+1), depthfirst(node.right, depth+1))
        return depthfirst(root, 0)

    def maxDepth01(self, root: Optional[TreeNode]) -> int: # bfs solution
        if root is None: return 0
        queue, level = deque([root]), 0
        while queue:
            for i in range(len(queue)):
                node = queue.popleft()
                if node.left: queue.append(node.left)
                if node.right: queue.append(node.right)
            level += 1
        return level


    def maxDepth02(self, root: Optional[TreeNode]) -> int: # iterative dfs solution
        if root is None: return 0
        stack, depth = [[root, 1]], 0
        while stack:
            node, nodeDepth = stack.pop()
            depth = max(depth, nodeDepth)
            if node.right: stack.append([node.right, nodeDepth+1])
            if node.left: stack.append([node.left, nodeDepth+1])
        return depth
