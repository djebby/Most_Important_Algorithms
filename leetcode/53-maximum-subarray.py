# https://leetcode.com/problems/maximum-subarray/ (top-interview-questions)

from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum, curr_max = nums[0], 0
        
        for num in nums:
            if curr_max < 0: curr_max = 0
            curr_max += num
            max_sum = max(max_sum, curr_max)
        
        return max_sum