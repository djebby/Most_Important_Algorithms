# https://leetcode.com/problems/string-to-integer-atoi/ (top-interview-questions) (disliked)

class Solution:
	def myAtoi(self, s: str) -> int:
		
		strInt = ""

		for i in range(len(s)):
			if s[i] == " " and len(strInt) == 0:
				continue
			elif s[i] in "+-" and len(strInt) == 0:
				strInt += s[i]
			elif s[i].isdigit():
				strInt += s[i]
			else:
				break

		if len(strInt) == 0 or strInt in "+-":
			return 0
		if int(strInt) > ((2**31) - 1):
			return (2**31) - 1
		if int(strInt) < -2 ** 31:
			return -2**31
		return int(strInt)
