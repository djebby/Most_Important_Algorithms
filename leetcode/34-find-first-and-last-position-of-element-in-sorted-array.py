# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ (top-interview-questions)

from typing import List


class Solution:
	def searchRange(self, nums: List[int], target: int) -> List[int]:
		# initiate the starting and the ending position of the target
		start, end = -1, -1

		# find the starting position of the target
		left, right = 0, len(nums)-1
		while left <= right:
			mid = left + (right - left) // 2
			if nums[mid] < target: left = mid + 1
			elif nums[mid] > target: right = mid - 1
			else: # in case we found him we just save this index value and we continue our binary search in the left part of the array
				start = mid
				right = mid - 1

		# find the ending position of the target
		left, right = 0, len(nums)-1
		while left <= right:
			mid = left + (right - left) // 2
			if nums[mid] < target: left = mid + 1
			elif nums[mid] > target: right = mid - 1
			else: # in case we found him we just save this index value and we continue our binary search in the right part of the array
				end = mid
				left = mid + 1

		return [start, end]