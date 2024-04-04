# https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

class Solution:
    def maxDepth(self, s: str) -> int:
        max_depth = 0
        cur_depth = 0
        for c in s:
            if c == '(':
              cur_depth += 1
            elif c == ')':
              cur_depth -= 1
            max_depth = max(max_depth, cur_depth)
        
        return max_depth
