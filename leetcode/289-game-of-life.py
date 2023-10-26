# https://leetcode.com/problems/game-of-life/ (top-interview-questions)


from typing import List


class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None: # Space O(1)
        """
        Do not return anything, modify board in-place instead.
        """
        # 0 to 0 => 0 (stay died)
        # 1 to 0 => 1 (was live and died)
        # 0 to 1 => 2 (was died and lived)
        # 1 to 1 => 3 (stay lived)

        ROWS = len(board)
        COLS = len(board[0])

        for r in range(ROWS):
            for c in range(COLS):
                lived_neighbors = self.__countLivedNeighbors(board, r, c)
                if board[r][c] == 1 and lived_neighbors in [2, 3]:
                    board[r][c] = 3
                elif board[r][c] == 0 and lived_neighbors == 3:
                    board[r][c] = 2
        
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == 1:
                    board[r][c] = 0
                elif board[r][c] in [2, 3]:
                    board[r][c] = 1


    def __countLivedNeighbors(self, board, r, c):
        neighbors = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
        lived_neighbors = 0
        for neighbor in neighbors:
            row = r + neighbor[0]
            col = c + neighbor[1]
            if min(row, col) >= 0 and row < len(board) and col < len(board[0]) and board[row][col] in [1, 3]:
                lived_neighbors += 1
        return lived_neighbors


    def gameOfLife01(self, board: List[List[int]]) -> None: # Space O(N)
        """
        Do not return anything, modify board in-place instead.
        """
        ROWS = len(board)
        COLS = len(board[0])

        to_die = list()
        to_live = list()
        neighbors = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
        for r in range(ROWS):
            for c in range(COLS):
                # first step is to get the the number of lived neighbors
                lived_neighbors = 0
                for neighbor in neighbors:
                    row = r + neighbor[0]
                    col = c + neighbor[1]
                    if min(row, col) >= 0 and row < ROWS and col < COLS and board[row][col] == 1:
                        lived_neighbors += 1
                # then mark the current cell as (to be dead) if she is a live and if her lived neighbors not 2 or 3
                if board[r][c] == 1 and lived_neighbors not in [2, 3]:
                    to_die.append([r, c])
                # finally if the current cell is alrady a dead cell and there lived neighbors = 3 then make her ( to be lived )
                elif board[r][c] == 0 and lived_neighbors == 3:
                    to_live.append([r, c])
        # finally kill the to be dead cells
        for r, c in to_die:
            board[r][c] = 0
        # and live the to be lived cells
        for r, c in to_live:
            board[r][c] = 1
        

