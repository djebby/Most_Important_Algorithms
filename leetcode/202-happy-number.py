# https://leetcode.com/problems/happy-number/ (top-interview-questions)

class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()
        def sumOfDigitSquares(n):
            result = 0
            while n:
                digit = n % 10
                digit *= digit
                result += digit
                n //= 10
            return result

        while n not in visited:
            visited.add(n)
            n = sumOfDigitSquares(n)
            if n == 1: return True
        return False
