# https://leetcode.com/problems/minimum-falling-path-sum/


from typing import List

class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        """
        top-down approach (memoization)
        """
        
        n = len(matrix)
        falling_paths = [[1, -1], [1, 0], [1, 1]]

        cache = {}

        def dfs(row, col):
            if col < 0 or col == n:
                return float('inf')
            if row == n-1:
                return matrix[row][col]
            if (row, col) in cache:
                return cache[(row, col)]
            
            min_falling_path_sum = float('inf')
            for dr, dc in falling_paths:
                min_falling_path_sum = min(min_falling_path_sum, matrix[row][col] + dfs(row + dr, col + dc))
            
            cache[(row, col)] = min_falling_path_sum
            return min_falling_path_sum


        min_falling_path_sum = float('inf')
        for c in range(n):
            min_falling_path_sum = min(min_falling_path_sum, dfs(0, c))

        return min_falling_path_sum




    def minFallingPathSumDP(self, matrix: List[List[int]]) -> int:
        """
        Dynamic Programming Solution bottom-up approach (tabulation)
        """
        n = len(matrix)
        falling_paths = [[1, -1], [1, 0], [1, 1]]


        for row in reversed(range(n-1)):
            for col in reversed(range(n)):
                min_falling_path_sum = float('inf')
                for dr, dc in falling_paths:
                    if col + dc < 0 or col + dc == n:
                        continue
                    min_falling_path_sum = min(min_falling_path_sum, matrix[row+dr][col+dc])
                matrix[row][col] += min_falling_path_sum
        
        return min(matrix[0])
