# https://leetcode.com/problems/word-search/ (top-interview-questions)

from typing import List


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        ROWS, COLS = len(board), len(board[0])
        if len(word) > (ROWS*COLS): return False
        visited = set()


        def dfs(r, c, i):
            if i == len(word): return True
            if (r < 0 or c < 0 or r >= ROWS or c >= COLS or word[i] != board[r][c] or (r, c) in visited):
                return False
            visited.add((r, c))
            result = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
            visited.remove((r, c))
            return result

        for row in range(ROWS):
            for col in range(COLS):
                if dfs(row, col, 0): return True
        
        return False
