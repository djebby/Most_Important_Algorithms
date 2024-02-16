# https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/

from typing import List

class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:

        nums.sort()
        prefix_sum = [0]
        for num in nums:
            prefix_sum.append(prefix_sum[-1] + num)
        
        i = len(nums) - 1
        while nums[i] >= prefix_sum[i]:
            i -= 1
        
        return prefix_sum[i+1] if i > 0 else -1
