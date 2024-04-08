# https://leetcode.com/problems/valid-parenthesis-string/

class Solution:
    def checkValidString(self, s: str) -> bool:
        min_open = 0; # count of minimum possible open parenthesis
        max_open = 0; # count of maximum possible open prenthesis

        for c in s:
            if c == ')':
                min_open -= 1
                max_open -= 1
            elif c == '(':
                min_open += 1
                max_open += 1
            else:
                min_open -= 1
                max_open += 1
            
            if max_open < 0: return False
            if min_open < 0: min_open = 0
        
        return min_open == 0
