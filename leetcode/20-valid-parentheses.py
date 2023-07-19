# https://leetcode.com/problems/valid-parentheses/ (top-interview-questions)

class Solution:
	def isValid(self, s: str) -> bool:
		closing = {')': '(', ']': '[', '}': '{'}
		opening = list()
		for c in s:
			if c in closing:
				if len(opening) > 0 and closing[c] == opening[-1]:
					opening.pop()
				else: return False
			else: opening.append(c)

		return len(opening) == 0
	

	def is_valid(self, s: str) -> bool:
		opening = {'(': ')', '{': '}', '[': ']'}
		stack = list()
		for char in s:
			if char in opening:
				stack.append(char)
			elif not stack or opening[stack.pop()] != char:
				return False
		return len(stack) == 0