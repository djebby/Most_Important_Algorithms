# https://leetcode.com/problems/intersection-of-two-arrays-ii/ (top-interview-questions)

from collections import Counter
from typing import List

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]: # Time: O(n)
        if len(nums2) > len(nums1): 
            nums2, nums1 = nums1, nums2
        intersection = []
        occurrences = Counter(nums1)
        for num in nums2:
            if occurrences.get(num, 0) > 0:
                intersection.append(num)
                occurrences[num] -= 1
        return intersection


    def intersectnlogn(self, nums1: List[int], nums2: List[int]) -> List[int]: # Time: O(n*logn)
        intersection = []
        nums1.sort()
        nums2.sort()
        i, j = 0, 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] > nums2[j]: j += 1
            elif nums1[i] < nums2[j]: i += 1
            else:
                intersection.append(nums1[i])
                i += 1
                j += 1
        return intersection

        
    def intersectBruteForce(self, nums1: List[int], nums2: List[int]) -> List[int]:
        intersection = []
        for num in nums1:
            for i in range(len(nums2)):
                if num == nums2[i]:
                    intersection.append(num)
                    nums2[i] = -1
                    break
        return intersection
