# https://leetcode.com/problems/product-of-array-except-self/ (top-interview-questions)

from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]: # Space: O(1)
        answer = [1] * len(nums)

        prefix = 1
        for i in range(len(nums)):
            answer[i] *= prefix
            prefix *= nums[i]
        
        suffix = 1
        for i in range(len(nums)-1, -1, -1):
            answer[i] *= suffix
            suffix *= nums[i]
        
        return answer


    def product_except_self(self, nums: List[int]) -> List[int]: # Space: O(n)
        prefix, suffix = [nums[0]], []
        for num in nums[1:]:
            prefix.append(prefix[-1] * num)
        
        for num in nums[::-1]:
            if not suffix:
                suffix.append(num)
                continue
            suffix.append(suffix[-1] * num)
        suffix = suffix[::-1]
        
        answer = [suffix[1]]
        for i in range(1, len(nums)-1):
            answer.append(prefix[i-1] * suffix[i+1])
        answer.append(prefix[-2])

        return answer
