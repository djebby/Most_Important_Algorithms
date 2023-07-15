# https://leetcode.com/problems/palindrome-number/

class Solution:
	def isPalindrome(self, x: int) -> bool:
		if x < 0:
			return False

		x = str(x)
		left = 0
		right = len(x)-1
		while left < right:
			if x[left] != x[right]:
				return False
			left += 1
			right -= 1

		return True



	def isPalindrome(self, x: int) -> bool:
		"""
		Follow up: Could you solve it without converting the integer to a string ?
		"""
		if x < 0:
			return False
		
		reversedX = 0
		originalX = x
		while x != 0:
			digit = x % 10
			x //= 10
			reversedX = (reversedX * 10) + digit
		
		return originalX == reversedX
	


	def isPalindrome(self, x: int) -> bool:
		if x < 0 or (x % 10 == 0 and x != 0):
			return False
			
		div = 1
		while x >= div * 10:
			div *= 10
		
		while x != 0:
			left = x // div
			right = x % 10
			if left != right:
				return False
			x = (x % div) // 10
			div /= 100
		
		return True