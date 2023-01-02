# https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

from typing import List

class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]: # Time: O(n), Space: O(1)
        curr_max = -1
        for i in range(len(arr)-1, -1, -1):
            next_max = max(curr_max, arr[i])
            arr[i] = curr_max
            curr_max = next_max
        return arr


solution = Solution()
solution.replaceElements([17,18,5,4,6,1]) # output: [18, 6, 6, 6, 1, -1]