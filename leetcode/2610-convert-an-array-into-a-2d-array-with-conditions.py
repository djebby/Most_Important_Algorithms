# https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/

from collections import Counter
from typing import List

class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        nums_count = Counter(nums)
        
        max_num_count = 0
        
        for _, val in nums_count.items():
            max_num_count = max(max_num_count, val)
        
        two_dim_arr = [[] for _ in range(max_num_count)]

        for num in nums_count:
            r = 0
            while nums_count[num] > 0:
                two_dim_arr[r].append(int(num))
                nums_count[num] -= 1
                r += 1

        return two_dim_arr
