# https://leetcode.com/problems/arithmetic-slices-ii-subsequence/

from typing import List

class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [defaultdict(int) for _ in range(n)]

        count = 0
        for i in range(1, n):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] += 1 + dp[j][diff]
                count += dp[j][diff]

        return count

        ######### SLOW SOLUTION USING DFS... TIME LIMIT EXCEEDED #########
        # n = len(nums)
        # cache = {}
        # def dfs(index, diff):
        #     if (index, diff) in cache:
        #         return cache[(index, diff)]
        #   
        #     arith_subs = 0
        #     for next_index in range(index+1, n):
        #         if nums[index] - nums[next_index] == diff:
        #             arith_subs += 1 + dfs(next_index, diff)
        #   
        #     cache[(index, diff)] = arith_subs
        #     return arith_subs
        #
        # arith_subs = 0
        # for i in range(n-1):
        #     for j in range(i+1, n):
        #         diff = nums[i] - nums[j]
        #         arith_subs += dfs(j, diff)
        #
        # return arith_subs
