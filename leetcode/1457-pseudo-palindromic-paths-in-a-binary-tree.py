# https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:
        
        def dfs(node, path_val_freq):

            path_val_freq[node.val] += 1

            # base case : node is a leaf node
            if node.left == None and node.right == None:
                count = 1 if is_pseudo_palindrom(path_val_freq) else 0
                path_val_freq[node.val] -= 1
                return count
            
            counter = 0

            if node.left != None: counter += dfs(node.left, path_val_freq)
            if node.right != None: counter += dfs(node.right, path_val_freq)

            path_val_freq[node.val] -= 1

            return counter



        def is_pseudo_palindrom(nums_count):
            odd_freq_counter = 0

            for freq in nums_count.values():
                odd_freq_counter += (freq % 2)
                if odd_freq_counter > 1:
                    return False
            
            return True
        
        path_val_freq = defaultdict(int)

        return dfs(root, path_val_freq)
