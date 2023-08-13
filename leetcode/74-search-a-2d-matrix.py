# https://leetcode.com/problems/search-a-2d-matrix/

from typing import List

class Solution:
	def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
		first = 0 # first row (row with index 0)
		last = len(matrix)-1 # last row (row with index len(matrix)-1)
		
		# binary search for the row that maybe contain the target value
		while first <= last:
			mid_row = first + (last-first) // 2
			if matrix[mid_row][0] <= target and target <= matrix[mid_row][-1]:
				# if target is exist then it should be in this row
				# so we do another binary search but this time inside the row itself
				left = 0
				right = len(matrix[0]) - 1
				while left <= right:
					mid_col = left + (right - left) // 2
					if target == matrix[mid_row][mid_col]:
						return True
					elif target > matrix[mid_row][mid_col]:
						left = mid_col + 1
					else:
						right = mid_col - 1
				break
			elif target < matrix[mid_row][0]:
				last = mid_row - 1
			elif target > matrix[mid_row][-1]:
				first = mid_row + 1

		return False