# https://leetcode.com/problems/reverse-integer/ (top-interview-questions)

import math

class Solution:
    def reverse(self, x: int) -> int:
        MAX = 2**31 - 1 #  2147483647
        MIN = -2**31    # -2147483648

        reversed_x = 0

        while x:
            digit = int(math.fmod(x, 10))
            x = int(x/10)
            if ((reversed_x > MAX // 10 or (reversed_x == MAX // 10 and digit > MAX % 10)) or
                (reversed_x < MIN // 10 or (reversed_x == MIN // 10 and digit < MIN % 10))):
                return 0
            reversed_x = reversed_x * 10 + digit
        return reversed_x
