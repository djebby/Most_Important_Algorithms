# https://leetcode.com/problems/largest-substring-between-two-equal-characters/

class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        max_length = -1

        chars_idx = {} # chars first index seen in s

        for i in range(len(s)):
            if s[i] not in chars_idx:
                chars_idx[s[i]] = i
            else:
                max_length = max(max_length, (i - chars_idx[s[i]] - 1))

        return max_length
