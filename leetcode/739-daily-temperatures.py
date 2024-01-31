# https://leetcode.com/problems/daily-temperatures/

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        answer = [0] * n

        monotonic_stack = []

        for i in reversed(range(n)):
            while monotonic_stack and monotonic_stack[-1][0] <= temperatures[i]:
                monotonic_stack.pop()
            
            if monotonic_stack:
                answer[i] = monotonic_stack[-1][1] - i
            
            monotonic_stack.append([temperatures[i], i])
        
        return answer
