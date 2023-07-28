# https://leetcode.com/problems/rotate-image/ (top-interview-questions)

from typing import List


class Solution:

	def rotate(self, matrix: List[List[int]]) -> None:
		"""
		Do not return anything, modify matrix in-place instead.
		"""
		self.transpose(matrix)
		self.reverse_rows(matrix)

	def transpose(self, matrix: List[List[int]]) -> None:
		for i in range(len(matrix)):
			for j in range(i):
				matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		
	def reverse_rows(self, matrix: List[List[int]]) -> None:
		for i in range(len(matrix)):
			matrix[i].reverse()



	def rotate01(self, matrix: List[List[int]]) -> None:
		"""
		Do not return anything, modify matrix in-place instead.
		"""
		l, r = 0, len(matrix)-1

		while l < r:
			for i in range(r-l):
				top, bottom = l, r
				top_left = matrix[top][l+i]
				
				# top left <=== bottom left
				matrix[top][l+i] = matrix[bottom-i][l]

				# bottom left <=== bottom right
				matrix[bottom-i][l] = matrix[bottom][r-i]

				# bottom right <=== top right
				matrix[bottom][r-i] = matrix[top+i][r]

				# top right <=== top left
				matrix[top+i][r] = top_left
			l += 1
			r -= 1
