# https://leetcode.com/problems/valid-parentheses/ (top-interview-questions)

class Solution:
    def isValid(self, s: str) -> bool:
        closer = {')': '(', ']': '[', '}': '{'}
        validation_stack = []
        for c in s:
            if c in closer:
                if validation_stack and closer[c] == validation_stack[-1]:
                    validation_stack.pop()
                else: return False
            else: validation_stack.append(c)
        return False if validation_stack else True