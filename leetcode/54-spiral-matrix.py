# https://leetcode.com/problems/spiral-matrix/ (top-interview-questions)

from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        spiral_values = []
        top, left = 0, 0
        bottom, right = len(matrix), len(matrix[0])

        while left < right and top < bottom:
            # top left ==================> top right
            for i in range(left, right):
                spiral_values.append(matrix[top][i])
            top += 1

            # top right ==================> bottom right
            for i in range(top, bottom):
                spiral_values.append(matrix[i][right-1])
            right -= 1

            if left >= right or top >= bottom:
                break

            # bottom right ==================> bottom left
            for i in range(right-1, left-1, -1):
                spiral_values.append(matrix[bottom-1][i])
            bottom -= 1

            # bottom left ==================> top left
            for i in range(bottom-1, top-1, -1):
                spiral_values.append(matrix[i][left])
            left += 1
        
        return spiral_values
