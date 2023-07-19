# https://leetcode.com/problems/letter-combinations-of-a-phone-number/ (top-interview-questions)

from typing import List


class Solution:
	def letterCombinations(self, digits: str) -> List[str]:
		if len(digits) == 0: return []
		hash_map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
		letter_combinations = []

		def backtracking(i, curr_str):
			if i == len(digits):
				letter_combinations.append(curr_str)
				return
			for char in hash_map[digits[i]]:
				backtracking(i+1, curr_str+char)

		backtracking(0, "")

		return letter_combinations