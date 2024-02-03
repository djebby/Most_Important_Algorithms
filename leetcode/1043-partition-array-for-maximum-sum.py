# https://leetcode.com/problems/partition-array-for-maximum-sum/

from typing import List

class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        
        cache = {}

        def dfs(idx):
            if idx in cache:
                return cache[idx]

            max_item = float('-inf')
            sum_max = 0
            for i in range(idx, min(idx+k, len(arr))):
                max_item = max(max_item, arr[i])
                sum_max = max(sum_max, dfs(i+1) + max_item * (i-idx+1))
            
            cache[idx] = sum_max
            return sum_max

        return dfs(0)



sol = Solution()
result = sol.maxSumAfterPartitioning([1,15,7,9,2,5,10], 3)
print(result)
