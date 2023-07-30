# https://leetcode.com/problems/powx-n/ (top-interview-questions)

class Solution:
    def myPow(self, x: float, n: int) -> float:
        x = 1/x if n < 0 else x
        def helper(x, n):
            if x == 0: return 0
            if n == 0: return 1
            if x == 1 or n == 1: return x
            res = helper(x, n//2)
            res *= res
            return res if n % 2 == 0 else x * res

        result = helper(x, abs(n))
        return result