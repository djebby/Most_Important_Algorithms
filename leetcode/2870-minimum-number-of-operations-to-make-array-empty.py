# https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/

from collections import Counter
import math
from typing import List

class Solution:
    def minOperations(self, nums: List[int]) -> int:
        nums_count = Counter(nums)
        min_op = 0

        # For each number, first check if it's not divisible by 3. If it's not,
        # keep applying the two-element deletion operation until the rest is divisible by 3.
        # If the rest is never divisible by 3, return -1.
        for num in nums_count:
            while 2 <= nums_count[num] and nums_count[num] % 3 != 0:
                nums_count[num] -= 2
                min_op += 1
            if nums_count[num] % 3 == 0:
                min_op += int(nums_count[num] / 3)
            else:
                return -1

        return min_op

    def minOperationsBetterSol(self, nums: List[int]) -> int:
        nums_count = Counter(nums)
        min_op = 0
        for _, count in nums_count.items():
            if count == 1:
                return -1
            min_op += math.ceil(count / 3)
            # the fact that any number greater than 1 can be created by a combination of 2's and 3's help us to solve this problem.
            # math.ceil(number / 3) give us how many 3's and 2's we need to sum up to that number.
        
        return min_op
