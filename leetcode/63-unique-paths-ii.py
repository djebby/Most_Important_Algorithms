# https://leetcode.com/problems/unique-paths-ii

from typing import List

class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        """ top-down approach (memoization) """
        if obstacleGrid[-1][-1] == 1:
            return 0
        
        ROWS, COLS = len(obstacleGrid), len(obstacleGrid[0])
        cache = dict()

        def dfs(r, c):
            if (r, c) in cache:
                return cache[(r, c)]
            if r == ROWS or c == COLS or obstacleGrid[r][c] == 1:
                return 0
            if r == ROWS - 1 and c == COLS - 1:
                return 1
            
            unique_paths = dfs(r, c+1) + dfs(r+1, c)
            cache[(r, c)] = unique_paths
            return unique_paths

        return dfs(0, 0)



    def unique_paths_with_obstacles(self, obstacleGrid: List[List[int]]) -> int:
        """ bottom-up approach (tabulation) """
        if obstacleGrid[-1][-1] == 1:
            return 0
        ROWS, COLS = len(obstacleGrid), len(obstacleGrid[0])
        dp = [0] * COLS
        dp[-1] = 1

        for r in reversed(range(ROWS)):
            for c in reversed(range(COLS)):
                if obstacleGrid[r][c] == 1:
                    dp[c] = 0
                elif c < COLS-1:
                    dp[c] += dp[c+1]

        return dp[0]