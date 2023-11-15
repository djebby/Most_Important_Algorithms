# https://leetcode.com/problems/first-unique-character-in-a-string/ (top-interview-questions)

from collections import Counter

class Solution:
    def firstUniqChar(self, s: str) -> int:
        charOccurrences = Counter(s)
        for i in range(len(s)):
            if charOccurrences[s[i]] == 1: return i
        return -1
