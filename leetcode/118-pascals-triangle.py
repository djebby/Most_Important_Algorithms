# https://leetcode.com/problems/pascals-triangle/ (top-interview-questions)

from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        numRowsArray = [[1]]

        for rowNum in range(1, numRows):
            if rowNum == 1: numRowsArray.append([1, 1])
            else:
                numRowsArray.append([1])
                for i in range(1, len(numRowsArray[rowNum-1])):
                    sum = numRowsArray[rowNum-1][i-1] + numRowsArray[rowNum-1][i]
                    numRowsArray[rowNum].append(sum)
                numRowsArray[rowNum].append(1)

        return numRowsArray