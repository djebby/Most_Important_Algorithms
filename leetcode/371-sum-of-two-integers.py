# https://leetcode.com/problems/sum-of-two-integers/

class Solution:
    def getSum(self, a: int, b: int) -> int:
        MAX = 1000 
        mask = 0xFFF # 1111 1111 1111
        while b:
            carry = ((a&b) << 1) & mask
            a = ( a ^ b) & mask
            b = carry
        return a if a <= MAX else ~(a^mask)
        # if a > 1000 then for sure the bits of a
        # represent a negative number
