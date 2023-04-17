# https://leetcode.com/problems/generate-parentheses/ (top-interview-questions)

from typing import List

class Solution:
	def generateParenthesis(self, n: int) -> List[str]:
		
		parentheses = list()
		
		def backtracking(stack = list(), opened = 0, closed = 0):
			if len(stack) == 2*n: # opened == closed == n
				parentheses.append(''.join(stack))
				return
			if opened < n:
				stack.append('(')
				backtracking(stack, opened+1, closed)
				stack.pop()
			if closed < opened:
				stack.append(')')
				backtracking(stack, opened, closed+1)
				stack.pop()

		backtracking()
		return parentheses