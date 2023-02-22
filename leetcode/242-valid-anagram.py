# https://leetcode.com/problems/valid-anagram/ (top-interview-questions)

from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)