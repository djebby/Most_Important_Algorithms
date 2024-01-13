# https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

from collections import Counter

class Solution:
    def minSteps(self, s: str, t: str) -> int:
        s_char_count = Counter(s)
        t_char_count = Counter(t)
        
        steps = 0
        for char, count in s_char_count.items():
            if t_char_count[char] < count:
                steps += count - t_char_count[char]
        
        return steps
