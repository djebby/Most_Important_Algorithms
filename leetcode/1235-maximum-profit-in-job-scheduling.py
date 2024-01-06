# https://leetcode.com/problems/maximum-profit-in-job-scheduling/

from typing import List
import bisect

class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        n = len(profit)

        # sorting the jobs in an chronological order
        jobs = sorted(zip(startTime, endTime, profit))

        # dynamic programming... 
        cache = { n : 0 }
        def backtracking(i):
            if i in cache:
                return cache[i]

            # search for the index of the FIRST next job that we can take if we chose to take the current job (jobs[i])
            j = bisect.bisect(jobs, (jobs[i][1], -1, -1))

            max_profit = max(backtracking(i+1), jobs[i][2] + backtracking(j))
            
            cache[i] = max_profit
            return max_profit
        
        return backtracking(0)


