# https://leetcode.com/problems/maximum-product-subarray/ (top-interview-questions)

from typing import List

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max_product = max(nums)
        curr_min, curr_max = 1, 1

        for num in nums:
            if num == 0:
                curr_min, curr_max = 1, 1
                continue
            auxiliary = curr_min
            curr_min = min(num * curr_min, num * curr_max, num)
            curr_max = max(num * auxiliary, num * curr_max, num)
            max_product = max(max_product, curr_max)

        return max_product
