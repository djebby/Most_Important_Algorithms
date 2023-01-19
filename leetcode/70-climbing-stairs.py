# https://leetcode.com/problems/climbing-stairs/ (top-interview-questions)

class Solution:
    def climbStairs(self, n: int) -> int: # Time: O(n)
        current, last = 1, 1
        for i in range(n-2, -1, -1):
            temp = current
            current += last
            last = temp
        return current

    def climb_stairs(self, n: int) -> int: # Time: O(n)
        def climb(stair, n, cache):
            if stair >  n: return 0
            if stair == n: return 1
            if stair in cache: return cache[stair]
            cache[stair+1] = climb(stair+1, n, cache)
            cache[stair+2] = climb(stair+2, n, cache)
            return cache[stair+1] + cache[stair+2]
        return climb(0, n, {})