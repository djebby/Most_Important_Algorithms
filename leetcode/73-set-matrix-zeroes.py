# https://leetcode.com/problems/set-matrix-zeroes/ (top-interview-questions)

import copy
from typing import List

class Solution:
    # Space O(1)
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        first_row = False # is first row zero ?

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    matrix[0][j] = 0
                    if i > 0:
                        matrix[i][0] = 0
                    else:
                        first_row = True
        
        for i in range(1, len(matrix)):
            for j in range(1, len(matrix[0])):
                if matrix[0][j] == 0 or matrix[i][0] == 0:
                    matrix[i][j] = 0
        
        if matrix[0][0] == 0:
            for i in range(len(matrix)):
                matrix[i][0] = 0
        
        if first_row:
            for j in range(len(matrix[0])):
                matrix[0][j] = 0
        


    
    
    
    # Space O(n+m)
    def SetZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows = [False] * len(matrix)
        cols = [False] * len(matrix[0])

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    rows[i] = True
                    cols[j] = True
        
        for i in range(len(rows)):
            if rows[i]:
                for j in range(len(matrix[0])):
                    matrix[i][j] = 0
        
        for i in range(len(cols)):
            if cols[i]:
                for j in range(len(matrix)):
                    matrix[j][i] = 0



    # Space O(n*m)
    def set_zeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        mtx_copy = copy.deepcopy(matrix)
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if mtx_copy[i][j] == 0:
                    for k in range(len(matrix)):
                        matrix[k][j] = 0
                    for l in range(len(matrix[0])):
                        matrix[i][l] = 0


