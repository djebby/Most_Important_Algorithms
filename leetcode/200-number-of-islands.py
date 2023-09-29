# https://leetcode.com/problems/number-of-islands/ (top-interview-questions)

from collections import deque
from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        visited = set()
        
        def bfs(row, col):
            queue = deque()
            queue.append((row, col))
            while queue:
                r, c = queue.popleft()
                directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
                for dr, dc in directions:
                    if min(r+dr, c+dc) >= 0 and r+dr < len(grid) and c+dc < len(grid[0]) and grid[r+dr][c+dc] == "1" and (r+dr, c+dc) not in visited:
                        visited.add((r+dr, c+dc))
                        queue.append((r+dr, c+dc))


        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == "1" and (r, c) not in visited:
                    visited.add((r, c))
                    bfs(r, c)
                    islands += 1
        
        return islands
