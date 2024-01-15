# https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:

        start_node = None

        # convert the tree to an undirected graph and save the start node
        root.parent = None
        stack = [root]
        while len(stack) > 0:
            node = stack.pop()
            node.infected = False
            if node.val == start:
                start_node = node
            if node.left != None:
                node.left.parent = node
                stack.append(node.left)
            if node.right != None:
                node.right.parent = node
                stack.append(node.right)
        
        # just search for the max depth of this graph and decrement it by one (because the start node is already infected)
        def dfs(node, depth = 0):
            if node == None or node.infected == True:
                return depth
            node.infected = True
            return 1 + max(dfs(node.parent, depth), dfs(node.left, depth), dfs(node.right, depth))

        return dfs(start_node) - 1
