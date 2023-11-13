# https://leetcode.com/problems/insert-delete-getrandom-o1/ (top-interview-questions)

import random

class RandomizedSet:

	def __init__(self):
		# HashMap: val => index (map each value to her index in valSet)
		self.valIndex = dict()
		# Array to store the values
		self.valSet = list()

	def insert(self, val: int) -> bool:
		# if val already exist in our randomized set return False
		if val in self.valIndex:
			return False
		# map: val => index
		self.valIndex[val] = len(self.valSet)
		# add val to the valSet at the end
		self.valSet.append(val)
		return True

	def remove(self, val: int) -> bool:
		"""
		the idea is to override the to be removed value with the last value in setVal
		and then get rid of this last value instead.
		"""
		if val not in self.valIndex:
			return False
		index = self.valIndex[val] # index of the to be deleted value
		lastVal = self.valSet[-1] # last value in the valSet

		self.valSet[index] = lastVal # the overriding phase (override the to be removed value with the last value in the setVal)
		self.valIndex[lastVal] = index # update the index of the last value to the index of the deleted value

		self.valSet.pop() # the removing phase (remove the last value in the valSet)
		del self.valIndex[val] # the removing pahse (remove the to be removed value from the hashmap)
		
		return True

	def getRandom(self) -> int:
		return random.choice(self.valSet)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()