# https://leetcode.com/problems/surrounded-regions/ (top-interview-questions)

from collections import deque
from typing import List


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        def markAsUnsurroundedDFS(row, col):
            if min(row, col) < 0 or row >= len(board) or col >= len(board[0]) or board[row][col] != "O":
                return
            board[row][col] = "U"
            markAsUnsurroundedDFS(row+1, col)
            markAsUnsurroundedDFS(row-1, col)
            markAsUnsurroundedDFS(row, col+1)
            markAsUnsurroundedDFS(row, col-1)

        def markAsUnsurroundedBFS(row, col):
            board[row][col] = "U"
            queue = deque()
            queue.append((row, col))
            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            while queue:
                r, c = queue.popleft()
                for dr, dc in directions:
                    if min(r+dr, c+dc) >= 0 and r+dr < len(board) and c+dc < len(board[0]) and board[r+dr][c+dc] == "O":
                        board[r+dr][c+dc] = "U"
                        queue.append((r+dr, c+dc))

        for i in range(len(board)):
            if board[i][0] == "O":
                markAsUnsurroundedBFS(i, 0)
            if board[i][-1] == "O":
                markAsUnsurroundedBFS(i, len(board[0])-1)

        for i in range(len(board[0])):
            if board[0][i] == "O":
                markAsUnsurroundedBFS(0, i)
            if board[-1][i] == "O":
                markAsUnsurroundedBFS(len(board)-1, i)
        
        for r in range(len(board)):
            for c in range(len(board[0])):
                if board[r][c] == "O":
                    board[r][c] = "X"
                elif board[r][c] == "U":
                    board[r][c] = "O"
