# https://leetcode.com/problems/increasing-triplet-subsequence/ (top-interview-questions)

from typing import List

class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        small = float('inf')
        medium = float('inf')
        for num in nums:
            if small >= num: 
                small = num
            elif medium >= num: # num is greater then small and less then or equal medium
                medium = num
            else: # num is greater then small and medium so we found a result we return True
                return True
        
        return False
