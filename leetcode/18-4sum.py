# https://leetcode.com/problems/4sum/

from typing import List

class Solution:
	def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
		quadruplets, quadruplet = list(), list()
		nums.sort()

		def helper(k, index, target):
			if k == 2: # base case
				l, r = index, len(nums)-1
				while l < r:
					if nums[l] + nums[r] < target:
						l += 1
					elif nums[l] + nums[r] > target:
						r -= 1
					else:
						quadruplets.append(quadruplet + [nums[l], nums[r]])
						l += 1
						while nums[l-1] == nums[l] and l < r:
							l += 1 # to avoid duplications
						r -= 1
						while nums[r] == nums[r+1] and l < r:
							r -= 1 # to avoid duplications
			else:
				for i in range(index, len(nums)-k+1):
					if i > index and nums[i] == nums[i-1]:
						continue # to avoid duplications
					quadruplet.append(nums[i])
					helper(k-1, i+1, target - nums[i])
					quadruplet.pop()

		helper(4, 0, target)
		return quadruplets
	


	def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
		quadruplets = list()
		nums.sort()
		for i in range(0, len(nums)-3):
			if i > 0 and nums[i-1] == nums[i]:
				continue
			for j in range(i+1, len(nums)-2):
				if j > i+1 and nums[j-1] == nums[j]:
					continue
				new_target = target - (nums[i] + nums[j])
				l = j+1
				r = len(nums)-1
				while l < r:
					if nums[l] + nums[r] < new_target:
						l += 1
					elif new_target < nums[l] + nums[r]:
						r -= 1
					else:
						quadruplets.append([nums[i], nums[j], nums[l], nums[r]])
						l += 1
						while nums[l-1] == nums[l] and l < r:
							l += 1
						r -= 1
						while nums[r] == nums[r+1] and l < r:
							r -= 1
		return quadruplets