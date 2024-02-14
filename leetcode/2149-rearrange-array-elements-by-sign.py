# https://leetcode.com/problems/rearrange-array-elements-by-sign/

from typing import List

class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        rearranged_nums = [None] * len(nums)
        i = 0
        j = 1
        for num in nums:
            if num > 0:
                rearranged_nums[i] = num
                i += 2
            else:
                rearranged_nums[j] = num
                j += 2

        return rearranged_nums
