# https://leetcode.com/problems/two-sum/ (top-interview-questions)

from typing import List

# Time: O(n), Space: O(n)
def twoSum(nums: List[int], target: int) -> List[int]:
    nums_index = {}

    for i, n in enumerate(nums):
        complement = target - n
        if complement in nums_index:
            return [nums_index[complement], i]
        nums_index[n] = i