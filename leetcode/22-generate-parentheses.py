# https://leetcode.com/problems/generate-parentheses/ (top-interview-questions)

from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        
        parenthesis = list()
        
        def decisionTree(stack = list(), opened = 0, closed = 0):
            if len(stack) == 2*n: # opened == closed == n
                parenthesis.append(''.join(stack))
                return
            if opened < n:
                stack.append('(')
                decisionTree(stack, opened+1, closed)
                stack.pop()
            if closed < opened:
                stack.append(')')
                decisionTree(stack, opened, closed+1)
                stack.pop()

        decisionTree()
        return parenthesis