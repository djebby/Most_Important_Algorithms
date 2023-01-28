# https://leetcode.com/problems/insert-delete-getrandom-o1/ (top-interview-questions)


import random


class RandomizedSet:

    def __init__(self):
        self.setMap = dict()
        self.setList = list()

    def insert(self, val: int) -> bool:
        if val in self.setMap: return False
        self.setMap[val] = len(self.setList)
        self.setList.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.setMap: return False
        index = self.setMap[val]
        lastVal = self.setList[-1]
        self.setList[index] = lastVal
        self.setList.pop()
        self.setMap[lastVal] = index
        del self.setMap[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.setList)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()