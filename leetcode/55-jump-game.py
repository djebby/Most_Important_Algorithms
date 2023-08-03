# https://leetcode.com/problems/jump-game/ (top-interview-questions)

from typing import List

class Solution:
	def canJump(self, nums: List[int]) -> bool:
		goal = len(nums) - 1

		for i in range(len(nums)-1, -1, -1):
			if i + nums[i] >= goal:
				goal = i
		
		return goal == 0


	def can_jump(slf, nums: List[int]) -> bool:
		max_reach = 0
		for i in range(len(nums)):
			if max_reach < i:
				return False
			max_reach = max(max_reach, i+nums[i])
		return True
