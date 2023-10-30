# https://leetcode.com/problems/wiggle-sort-ii/ (top-interview-questions)

from typing import List


class Solution:
    def wiggleSort(self, nums: List[int]) -> None: # Time: O(n) Space: O(n)
        """
        Do not return anything, modify nums in-place instead.
        """
        # counting sort... O(n) Time Complexity
        count = [0] * (max(nums)+1)
        for num in nums:
            count[num] += 1

        sortedNums = []
        for i in range(len(count)):
            for j in range(count[i]):
                sortedNums.append(i)
        
        ans = [0] * len(nums)

        for i in range(1, len(nums), 2):
            ans[i] = sortedNums.pop()
        
        i = 0
        while len(sortedNums) > 0:
            ans[i] = sortedNums.pop()
            i += 2

        for i in range(len(ans)):
            nums[i] = ans[i]



    def wiggleSortNlogN(self, nums: List[int]) -> None: # bad solution :( Time: O(n*logn) Space: O(n)
        """
        Do not return anything, modify nums in-place instead.
        """
        nums.sort()
        ans = [0] * len(nums)

        for i in range(1, len(nums), 2):
            ans[i] = nums.pop()

        i = 0
        while nums:
            ans[i] = nums.pop()
            i += 2
        for i in range(len(ans)):
            nums.append(ans[i])
