# https://leetcode.com/problems/number-of-1-bits/ (top-interview-questions)

class Solution:
    def hammingWeight(self, n: int) -> int:
        oneCount = 0
        while n != 0:
            n = n & (n-1)
            oneCount += 1
        return oneCount

    def hamming_weight(self, n: int) -> int:
        oneCount = 0
        while n != 0:
            if n & 1 == 1: oneCount += 1
            n = n >> 1
        return oneCount
