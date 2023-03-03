# https://leetcode.com/problems/climbing-stairs/ (top-interview-questions)

class Solution:
	def climbStairs(self, n: int) -> int: # Time: O(n)
		next_stair = 1 # 1 is the number of solution from the stair n-1
		stair = 2 if n > 1 else 1 # 2 is the number of solution from stair n-2 (if n == 1 stair = 1)
		# we have the number of solution from stair n-1 and stair n-2 
		# so we start looking for the number of solution from n-3 until we reach the floor stair 0
		for _ in range(n-3, -1, -1):
			temp = stair
			stair = stair + next_stair
			next_stair = temp
		return stair

	def climb_stairs(self, n: int) -> int: # Time: O(n)
		def climb(stair, n, cache):
			if stair >  n: return 0
			if stair == n: return 1
			if stair in cache: return cache[stair]
			cache[stair+1] = climb(stair+1, n, cache)
			cache[stair+2] = climb(stair+2, n, cache)
			return cache[stair+1] + cache[stair+2]
		return climb(0, n, {})