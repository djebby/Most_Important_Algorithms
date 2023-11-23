# https://leetcode.com/problems/contains-duplicate-ii/

from typing import List

class Solution:
	def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool: # Space O(k)
		window = set() # hash set
		for i in range(len(nums)):
			if len(window) == k+1:
				window.remove(nums[i-k-1])

			if nums[i] in window:
				return True
			
			window.add(nums[i])

		return False


	def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool: # Space O(n)
		hash_map = dict() # key: nums[i] => val: i

		for i in range(len(nums)):
			if nums[i] in hash_map and i - hash_map[nums[i]] <= k:
				return True
			hash_map[nums[i]] = i

		return False
