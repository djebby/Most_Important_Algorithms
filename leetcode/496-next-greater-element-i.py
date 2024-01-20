# https://leetcode.com/problems/next-greater-element-i/

from typing import List

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:

        next_greater_val = [None] * len(nums2)
        monotonic_stack = []
        for i in reversed(range(len(nums2))):
            while monotonic_stack and nums2[i] >= monotonic_stack[-1]:
                monotonic_stack.pop()
            
            next_greater_val[i] = monotonic_stack[-1] if monotonic_stack else -1
            monotonic_stack.append(nums2[i])
        
        nums2_idx = {}
        for i in range(len(nums2)):
            nums2_idx[nums2[i]] = i
        
        ans = []
        for val in nums1:
            index = nums2_idx[val]
            ans.append(next_greater_val[index])

        
        return ans

