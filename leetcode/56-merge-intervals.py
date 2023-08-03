# https://leetcode.com/problems/merge-intervals/ (top-interview-questions)

from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        intervals.sort(key = lambda interval: interval[0])
        output = [intervals[0].copy()]

        for interval in intervals[1:]:
            curr_end = output[-1][1]
            if interval[0] <= curr_end:
                output[-1][1] = max(curr_end, interval[1])
            else:
                output.append(interval.copy())
        
        return output