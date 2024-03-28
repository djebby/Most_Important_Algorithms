# https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/

from collections import defaultdict
from typing import List

class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        max_length = 0
        window = defaultdict(int) # subarray elements frequencies tracker
        j = 0
        for i in range(len(nums)):
            window[nums[i]] += 1
            while window[nums[i]] > k and j <= i:
                window[nums[j]] -= 1
                j += 1
            max_length = max(max_length, (i - j + 1))
        
        return max_length
