# https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/

from typing import List

class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        n = len(nums)
        nums.sort()
        answer = []
        for i in range(0, n, 3):
            new_slice = nums[i : i+3]
            if new_slice[2] - new_slice[0] > k:
                return []
            answer.append(new_slice)
        
        return answer
