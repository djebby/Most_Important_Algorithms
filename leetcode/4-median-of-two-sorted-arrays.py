# https://leetcode.com/problems/median-of-two-sorted-arrays/

from typing import List
import math

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float: # O(log(min(n, m))) ^_^
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        TOTAL = len(nums1) + len(nums2)
        HALF = TOTAL // 2
        l = 0
        r = len(nums1) - 1
        
        while True:
            i = (l + r) // 2
            j = HALF - i - 2
            nums1Left = nums1[i] if i >= 0 else float('-infinity')
            nums1Right = nums1[i+1] if (i+1) < len(nums1) else float('infinity')
            nums2Left = nums2[j] if j >= 0 else float('-infinity')
            nums2Right = nums2[j+1] if (j+1) < len(nums2) else float('infinity')
            if nums1Left <= nums2Right and nums2Left <= nums1Right:
                if TOTAL % 2:
                    return min(nums1Right, nums2Right)
                else:
                    return ( max(nums1Left, nums2Left) + min(nums1Right, nums2Right) ) / 2
            elif nums1Left > nums2Right:
                r = i - 1
            else:
                l = i + 1
    
    def findMedianSortedArrays2(self, nums1: List[int], nums2: List[int]) -> float: # O(n+m) :(
        nums = self.merge(nums1, nums2)
        last_idx = len(nums) - 1
        return (nums[math.floor(last_idx / 2)] + nums[math.ceil(last_idx / 2)]) / 2

    def merge(self, nums1, nums2):
        """ merge two sorted arrays of number """
        nums = []
        l = 0
        r = 0
        while l < len(nums1) and r < len(nums2):
            if nums1[l] < nums2[r]:
                nums.append(nums1[l])
                l += 1
            else:
                nums.append(nums2[r])
                r += 1
        return nums + nums1[l:] + nums2[r:]
