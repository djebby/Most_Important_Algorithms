# https://leetcode.com/problems/power-of-three/

class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        maxPowerOfThree = 3 ** 19
        return (n > 0) and (maxPowerOfThree % n == 0)