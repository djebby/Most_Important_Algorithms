# https://leetcode.com/problems/is-subsequence/

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == '': return True
        pointer = 0
        for char in t:
            if char == s[pointer]: pointer += 1
            if len(s) == pointer: return True
        return False