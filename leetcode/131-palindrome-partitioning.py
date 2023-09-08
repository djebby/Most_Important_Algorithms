# https://leetcode.com/problems/palindrome-partitioning/ (top-interview-questions)

from typing import List

class Solution:
    def _is_palindrom(self, s):
        left, right = 0, len(s)-1
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True



    def partition(self, s: str) -> List[List[str]]:
        partitions = list()
        partition = list()
        def dfs(index):
            if index == len(s):
                partitions.append(partition[:])
                return
            
            for i in range(index, len(s)):
                if self._is_palindrom(s[index:i+1]):
                    partition.append(s[index:i+1])
                    dfs(i+1)
                    partition.pop()
        dfs(0)
        return partitions
