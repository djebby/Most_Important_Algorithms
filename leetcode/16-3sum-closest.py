# https://leetcode.com/problems/3sum-closest/

from typing import List

class Solution:
	def threeSumClosest(self, nums: List[int], target: int) -> int:
		closestSum = 0
		nums.sort()

		minDiff = float('inf')
		for i in range(len(nums) - 2):
			l = i+1
			r = len(nums) - 1
			while l < r:
				currSum = nums[i] + nums[l] + nums[r]

				if abs(target - currSum) < minDiff:
					closestSum = currSum
					minDiff = abs(target - currSum)

				if currSum < target:
					l += 1
				elif currSum > target:
					r -= 1
				else:
					return currSum

		return closestSum