# https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/

from typing import List

class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        xor = 0
        for num in nums: xor ^= num
        operations_count = 0
        while xor or k:
            if (xor & 1) ^ (k & 1):
                operations_count += 1
            xor >>= 1
            k >>= 1
        
        return operations_count
