# https://leetcode.com/problems/sqrtx/ (top-interview-questions)

from math import floor, sqrt

class Solution:
    def mySqrt(self, x: int) -> int:
        
        l = 1
        r = x // 2

        nearest_square = 1 if x == 1 else 0

        while l <= r:

            m = l + (r - l) // 2
            if (m*m == x): return m
            elif (m*m < x):
                nearest_square = m
                l = m + 1
            else:
                r = m - 1

        return nearest_square
