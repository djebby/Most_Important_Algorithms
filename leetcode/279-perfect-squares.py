# https://leetcode.com/problems/perfect-squares/ (top-interview-questions)

import math

class Solution:
    def numSquares(self, n: int) -> int:
        if math.sqrt(n) == math.floor(math.sqrt(n)):
            return 1

        perfect_squares = list()
        for i in range(1, n+1):
            if i * i > n:
                break
            perfect_squares.append(i*i)
        

        dp = [float('inf')] * (n+1)
        dp[0] = 0

        for i in range(1, n+1):
            for square in perfect_squares:
                if i >= square:
                    dp[i] = min(dp[i], 1+dp[i-square])
                else:
                    break

        return dp[n]
