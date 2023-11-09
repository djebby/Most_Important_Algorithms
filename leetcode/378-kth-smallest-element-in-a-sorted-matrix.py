# https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ (top-interview-questions)

from typing import List

class Solution:
	def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
		min_ = matrix[0][0]
		max_ = matrix[-1][-1] # last element in the matrix

		def countLessOrEqual(mid):
			count = 0
			row = 0
			col = len(matrix[0]) - 1
			while(row < len(matrix) and col >= 0):
				if matrix[row][col] <= mid:
					count += col + 1
					row += 1
				else:
					col -= 1
			return count


		while min_ <= max_:
			mid = min_ + (max_ - min_) // 2
			print(mid)
			# count how many element in the matrix are less or equal then the mid vlaue...
			count = countLessOrEqual(mid)
			if count < k:
				min_ = mid + 1
			else:
				max_ = mid - 1
		
		return min_
	

sol = Solution()
sol.kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8)