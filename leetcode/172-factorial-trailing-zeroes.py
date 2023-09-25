# https://leetcode.com/problems/factorial-trailing-zeroes/ (top-interview-questions)

class Solution:
    def trailingZeroes(self, n: int) -> int:

        zeroes = 0

        while n > 0:
            n = n // 5
            zeroes += n
        
        return zeroes
