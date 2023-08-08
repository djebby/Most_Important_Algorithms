# https://leetcode.com/problems/plus-one/ (top-interview-questions)

from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        integer = 0
        for i in range(len(digits)):
            integer += digits[i] * (10 ** (len(digits)-1 - i))
        integer += 1
        ans = []
        for digit in str(integer): ans.append(int(digit))
        return ans

    def plus_one(self, digits: List[int]) -> List[int]:
        i = len(digits) - 1
        while (i >= 0):
            if (digits[i] < 9):
                digits[i] += 1
                return digits
            else:
                digits[i] = 0
                i += 1
        
        digits.insert(0, 1)
        return digits
