# https://leetcode.com/problems/minimum-path-sum/

from typing import List


class Solution:
	def minPathSum(self, grid: List[List[int]]) -> int:
		ROWS = len(grid)
		COLS = len(grid[0])
		tabulation = [[0] * COLS for _ in range(ROWS)]
		tabulation[-1][-1] = grid[-1][-1]
		
		for row in reversed(range(ROWS)):
			for col in reversed(range(COLS)):
				if row == ROWS-1 and col == COLS-1:
					continue
				from_right = grid[row][col] + (tabulation[row][col+1] if col+1 < COLS else float('inf'))
				from_down = grid[row][col] + (tabulation[row+1][col] if row+1 < ROWS else float('inf'))
				tabulation[row][col] = min(from_right, from_down)

		return tabulation[0][0]
	

	def minPathSumSpaceOptimization(self, grid: List[List[int]]) -> int:
		ROWS, COLS = len(grid), len(grid[0])
		tabulation = [float('inf')] * COLS
		tabulation[-1] = grid[-1][-1]

		for row in reversed(range(ROWS)):
			for col in reversed(range(COLS)):
				if row == ROWS - 1 and col == COLS - 1:
					continue
				right = grid[row][col] + (tabulation[col+1] if col+1 < COLS else float('inf'))
				down = grid[row][col] + tabulation[col]
				tabulation[col] = min(right, down)

		return tabulation[0]
