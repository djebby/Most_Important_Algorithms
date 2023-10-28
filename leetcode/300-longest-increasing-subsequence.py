# https://leetcode.com/problems/longest-increasing-subsequence/ (top-interview-questions)

from typing import List

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [1] * len(nums)
        
        # bottom-up approach
        for i in reversed(range(len(nums)-1)):
            for j in range(i+1, len(nums)):
                if nums[i] < nums[j]:
                    dp[i] = max(dp[i], 1+dp[j])
        """
        the value dp[i] what tell us ?
        dp[i] is the length of the longest increasing subsequence from nums[i] to nums[n-1] (n = len(nums))
        THAT (the subsequence) INCLUDES nums[i]
        """
        # top-down approach
        # for i in range(1, len(nums)):
        #   for j in range(i):
        #       if nums[j] < nums[i]:
        #           dp[i] = max(dp[i], 1+dp[j])
        """
        the value dp[i] what tell us ?
        dp[i] is the length of the longest increasing subsequence from nums[0] to nums[i]
        THAT INCLUDES nums[i]
        """

        return max(dp)


    def memolengthOfLIS(self, nums: List[int]) -> int: # with memoization
        memo = dict()
        memo[0] = 1

        def lis(idx):
            if idx in memo:
                return memo[idx]
            
            for i in reversed(range(idx)):
                if nums[i] < nums[idx]:
                    memo[idx] = max(1+lis(i), memo.get(idx, 0))

            return memo[idx]
        
        for i in range(len(nums)):
            lis(i)

