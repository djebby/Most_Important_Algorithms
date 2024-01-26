# https://leetcode.com/problems/out-of-boundary-paths/

class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        moves = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        cache = {}

        def dfs(row = startRow, col = startColumn, remainded_moves = maxMove):
            if (row == m or row < 0 or col < 0 or col == n): return 1
            if remainded_moves == 0: return 0

            if (row, col, remainded_moves) in cache:
                return cache[(row, col, remainded_moves)]
            
            paths_count = 0
            for dr, dc in moves:
                paths_count += dfs(row+dr, col+dc, remainded_moves - 1)
            
            paths_count %= ((10 ** 9) + 7)

            cache[(row, col, remainded_moves)] = paths_count

            return paths_count
        
        return dfs()
