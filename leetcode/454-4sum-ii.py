# https://leetcode.com/problems/4sum-ii/ (top-interview-questions)

from typing import List

class Solution:
    def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:
        count = 0
        hash_map = dict()

        for num1 in nums1:
            for num2 in nums2:
                sum_ = num1 + num2
                hash_map[sum_] = hash_map.get(sum_, 0) + 1

        for num3 in nums3:
            for num4 in nums4:
                negation = -num3-num4
                if negation in hash_map:
                    count += hash_map[negation]
        
        return count
