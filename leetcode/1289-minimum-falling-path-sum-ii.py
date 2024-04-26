# https://leetcode.com/problems/minimum-falling-path-sum-ii/

from typing import List

class Solution:
    def minFallingPathSum(self, grid: List[List[int]]) -> int:
        n = len(grid)

        for i in reversed(range(n-1)):
            for j in range(n):
                _min = float('inf')
                for k in range(n):
                    if k == j: continue
                    _min = min(_min, (grid[i][j] + grid[i+1][k]))
                
                grid[i][j] = _min
        
        return min(grid[0])

