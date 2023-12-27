# https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        MODBY = 10 ** 9 + 7
        cache = {}

        def backtracking(dice, remain_target):
            if dice == n:
                return 1 if remain_target == 0 else 0
            
            if remain_target <= 0:
                return 0

            if (dice, remain_target) in cache: return cache[(dice, remain_target)]

            res = 0
            for i in range(1, k+1):
                res = (res + backtracking(dice+1, remain_target - i)) % MODBY
            
            cache[(dice, remain_target)] = res

            return res

        return backtracking(0, target)
