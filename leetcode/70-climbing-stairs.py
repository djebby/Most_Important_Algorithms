# https://leetcode.com/problems/climbing-stairs/ (top-interview-questions)

class Solution:
    def climbStairs(self, n: int) -> int: # Time: O(n)
        """ bottom-up approach (tabulation) """
        up = 1
        down = 1
        while n > 1:
            temp = down
            down = down + up
            up = temp
            n -= 1
        return down

    def climb_stairs(self, n: int) -> int: # Time: O(n)
        """ top-down approach (memoization) """
        def climb(stair, n, cache):
            if stair >  n: return 0
            if stair == n: return 1
            if stair in cache: return cache[stair]
            cache[stair+1] = climb(stair+1, n, cache)
            cache[stair+2] = climb(stair+2, n, cache)
            return cache[stair+1] + cache[stair+2]
        return climb(0, n, {})





# staircase examle: (n = 9)
#                                                   
# step = n  (1 way - just don't move way )--(1)--------------------------------------------------->___
# step = n - 1 ( 1 way only - climb 1 step, Two steps make us fall down the stairs 😵 )--(1)-->___| 9 |
# step = n - 2 ( step n+1 ways + step n+2 ways )--------(2)------------------------------->___| 8     |
#  .                                        (3)                                        ___| 7         |
#  .                                        (5)                                    ___| 6             |
#  .                                        (8)                                ___| 5                 |
#  .                                        (13)                           ___| 4                     |
#  .                                        (21)                       ___| 3                         |
# step = 1 (step 2 ways + step 3 ways )-----(34)------------------>___| 2                             |
# step = 0 (step 1 ways + step 2 ways )-----(55)----->>>> ________| 1                                 |
# the-ground-the-ground-the-ground-the-ground-the-ground  000000000000000000000000000000000000000000000
