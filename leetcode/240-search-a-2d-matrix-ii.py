# https://leetcode.com/problems/search-a-2d-matrix-ii/ (top-interview-questions)

from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # we start at the maximum point of one axe
        # until our target less then the current val we decrement from that axe
        # then if the target is greater than the current val  
        # we start add from the other axe util we found the target or get out of bounds
        row = 0
        col = len(matrix[0]) - 1

        while row < len(matrix) and col >= 0:
            if target < matrix[row][col]:
                col -= 1
            elif matrix[row][col] < target:
                row += 1
            else:
                return True
        return False
        
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = len(matrix) - 1
        col = 0

        while row >= 0 and col < len(matrix[0]):
            if target < matrix[row][col]:
                row -= 1
            elif target > matrix[row][col]:
                col += 1
            else:
                return True
        return False

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # linear scan throw the rows
        # and a binary search inside that row if the target
        # is in the range betwen first and last value of the row
        if target < matrix[0][0] or target > matrix[-1][-1]:
            return False
        for row in matrix:
            if row[0] <= target and target <= row[len(matrix[0])-1]:
                left = 0
                right = len(matrix[0])-1
                while left <= right:
                    mid = left + (right - left ) // 2
                    if row[mid] == target:
                        return True
                    elif target > row[mid]:
                        left = mid + 1
                    else:
                        right = mid - 1
            elif target < row[0]:
                return False

        return False
