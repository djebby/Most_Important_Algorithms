# https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/

from collections import Counter
from typing import List

class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        nums_count = Counter(nums)
        
        two_dim_arr = [[] for _ in range(max(nums_count.values()))]

        for num in nums_count:
            row = 0
            while nums_count[num] > 0:
                two_dim_arr[row].append(int(num))
                nums_count[num] -= 1
                row += 1

        return two_dim_arr
