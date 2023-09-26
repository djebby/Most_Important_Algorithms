# https://leetcode.com/problems/largest-number/ (top-interview-questions)

from functools import cmp_to_key
from typing import List

class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        # convert nums[i] from integers to strings
        for i in range(len(nums)):
            nums[i] = str(nums[i])

        # a custom compare function
        def comparator(num1, num2):
            # num1 + num2 is a string concatenation
            return 1 if num1+num2 > num2+num1 else -1

        nums = sorted(nums, key = cmp_to_key(comparator), reverse = True)

        # for input like this [0, 0, 0] (just zeros) the expected output is
        # a single zero "0", but we will get "000" so we must convert the
        # result to an integer to get rid of unwanted zeros 
        # ( "000" become just "0" )
        return str(int(''.join(nums)))
