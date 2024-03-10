# https://leetcode.com/problems/intersection-of-two-arrays/

from typing import List

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        num1_set = set(nums1)
        num2_set = set(nums2)

        intersection = []
        for num in num1_set:
            if num in num2_set:
                intersection.append(num)
        
        return intersection
