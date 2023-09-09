# https://leetcode.com/problems/gas-station/ (top-interview-questions)

from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        # if the total existing quantity of gas in all the stations
        # is less then the road cost of gas then it's impossibale to
        # travel around the circuit
        if sum(gas) < sum(cost):
            return -1
        
        tank = 0 # the quantity of gas in the tank
        start = 0 # the starting position
        for i in range(len(gas)):
            tank += gas[i] - cost[i]
            if tank < 0:
                tank = 0
                start = i + 1
        
        return start
