# https://leetcode.com/problems/flatten-nested-list-iterator/ (top-interview-questions)

# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """

class NestedInteger:
    def isInteger(self) -> bool:
        """
        @return True if this NestedInteger holds a single integer, rather than a nested list.
        """

    def getInteger(self) -> int:
        """
        @return the single integer that this NestedInteger holds, if it holds a single integer
        Return None if this NestedInteger holds a nested list
        """

    def getList(self) -> [NestedInteger]:
        """
        @return the nested list that this NestedInteger holds, if it holds a nested list
        Return None if this NestedInteger holds a single integer
        """

class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        self.integers = list()
        self.index = 0
        for nestedInteger in nestedList:
            self.dfs(nestedInteger)
        
    def next(self) -> int:
        next_int = self.integers[self.index]
        self.index += 1
        return next_int
        
    def hasNext(self) -> bool:
        return self.index < len(self.integers)

    def dfs(self, nestedInteger):
        if nestedInteger.isInteger():
            self.integers.append(nestedInteger.getInteger())
        else:
            for element in nestedInteger.getList():
                self.dfs(element)


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())