# https://leetcode.com/problems/container-with-most-water/ (top-interview-questions)

from typing import List

class Solution:
	def maxArea(self, height: List[int]) -> int: # Time : O(n)
		area, left, right = 0, 0, len(height) - 1

		while left < right:
			distance = right - left
			currArea = 0
			if height[left] > height[right]:
				currArea = distance * height[right]
				right -= 1
			else:
				currArea = distance * height[left]
				left += 1
			area = max(currArea, area)
		return area