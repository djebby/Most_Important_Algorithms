# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ (top-interview-questions)

class Solution:
	def strStr(self, haystack: str, needle: str) -> int: # 
		if len(needle) == 0:
			return 0
		
		for i in range(len(haystack)-len(needle)+1):
			if haystack[i] == needle[0]:
				j = 1
				while j < len(needle) and haystack[i+j] == needle[j]:
					j += 1
				if j == len(needle):
					return i

		return -1
