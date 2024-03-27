# https://leetcode.com/problems/subarray-product-less-than-k/

from typing import List

class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        result = 0
        window = 1
        j = 0
        for i in range(len(nums)):
            window *= nums[i]
            while window >= k and j <= i:
                window /= nums[j]
                j += 1
            result += (i - j + 1)
        
        return result
