# https://leetcode.com/problems/majority-element/ (top-interview-questions)

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int: # Time: O(n), Space: O(1)
        currentMajorityElement, count = None, 0

        for num in nums:
            if count == 0: currentMajorityElement = num
            if num == currentMajorityElement: count += 1
            else: count -= 1

        return currentMajorityElement
    

    def majority_element(self, nums: List[int]) -> int: # Time: O(n), Space: O(n)
        occurances = dict()
        for num in nums:
            occurances[num] = 1 + occurances.get(num, 0)
            if occurances[num] > (len(nums) / 2): return num

