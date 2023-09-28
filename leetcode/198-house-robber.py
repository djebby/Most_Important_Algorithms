# https://leetcode.com/problems/house-robber/ (top-interview-questions)

from typing import List

class Solution:
	def rob(self, nums: List[int]) -> int:
		pre_last, last = 0, 0
		for num in nums:
			max_ = max(last, pre_last+num)
			pre_last = last
			last = max_
		return last
