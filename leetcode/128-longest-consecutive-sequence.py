# https://leetcode.com/problems/longest-consecutive-sequence/ (top-interview-questions)

from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        maxLength = 0
        
        for num in numSet:
            if (num - 1) not in numSet:
                length = 1
                while (num + length) in numSet: length += 1
                maxLength = max(maxLength, length)
        return maxLength
    

    def longest_Consecutive(self, nums: List[int]) -> int:
        if len(nums) == 0: return 0

        numSet = set(nums)
        longestSequence = 1

        for num in nums:
            if num not in numSet:
                continue

            l = num - 1
            r = num + 1
            while l in numSet or r in numSet:
                if l in numSet:
                    numSet.remove(l)
                    l -= 1
                if r in numSet:
                    numSet.remove(r)
                    r += 1
            
            longestSequence = max(longestSequence, (r - l - 1))
        
        return longestSequence
