# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ (top-interview-questions)


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        p_path = list()
        q_path = list()
        self.path_to_target = list()
        self.targetFound = False
        def dfs(node, path, target):
            if node == None or self.targetFound:
                return
            
            if node.val == target:
                path.append(node)
                self.path_to_target = path.copy()
                self.targetFound = True
                return
            
            path.append(node)
            dfs(node.left, path, target)
            dfs(node.right, path, target)
            path.pop()

        dfs(root, list(), p.val)
        p_path = self.path_to_target.copy()
        self.targetFound = False
        dfs(root, list(), q.val)
        q_path = self.path_to_target.copy()
        
        lca = None
        for i in reversed(range(min(len(p_path), len(q_path)))):
            if p_path[i].val == q_path[i].val:
                lca = p_path[i]
                break
        return lca
        


    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        

        def dfs(node, p, q):
            # our base cases are if we found one of the two nodes we do not go deeper 
            # we just forward it up to indicate that we are found somthing
            # or if we passed a None node so we just forward None
            if node == p or node == q or node == None:
                return node
            
            # if none of our base cases are true 
            # we do a search in the left side and the right side of the current node
            # we save the results in the variables left and right to analyse them in the next lines...
            left = dfs(node.left, p, q)
            right = dfs(node.right, p, q)
            
            # now we start process the result comming from the left and the right sides
            # if we found one node in the left side and the other node in the right side
            # so for sure this current node is the lowest common ancestor node that we are looking for
            if left and right:
                return node
            
            # if we reach this line of code that's mean that just one side (left or right) 
            # found one of the two nodes OR no side found any of the two nodes
            # so we start look for how is the side that found a node (if it exist) and we forward it up
            # if none of the two sides found somthing we forward up a None value

            # is the left side found a node ? if true just forward it up
            if left: return left
            # is the right side found a node ? if true just forward it up
            if right: return right
            # if either of the two sides does not found any of the two nodes we must forward None
            # to indicate that this subtree does not contain either p node nor q node
            return None
            # (this last 3 line of code are equals to => return left if left else right)
        
        return dfs(root, p, q)
