# https://leetcode.com/problems/n-th-tribonacci-number/

class Solution:
    def tribonacci(self, n: int) -> int:
        values = [0, 1, 1]
        if n < 3: return values[n]

        n -= 2
        while n > 0:
            values.append(values[-1] + values[-2] + values[-3])
            n -= 1
        
        return values[-1]
