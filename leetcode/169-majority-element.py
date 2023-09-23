# https://leetcode.com/problems/majority-element/ (top-interview-questions)

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int: # Time: O(n), Space: O(1)
        element, count = None, 0
        for num in nums:
            if count == 0: element = num
            count += 1 if element == num else -1
        return element
    

    def majority_element(self, nums: List[int]) -> int: # Time: O(n), Space: O(n)
        occurances = dict()
        for num in nums:
            occurances[num] = 1 + occurances.get(num, 0)
            if occurances[num] > (len(nums) / 2): return num
